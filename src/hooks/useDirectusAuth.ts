import { useCallback, useState } from 'react';
import {
  isDirectusError,
  registerUser,
} from '@directus/sdk';
import { directus } from '../lib/directus';

export type AuthMode = 'login' | 'signup';
export type AuthStatus = 'idle' | 'loading' | 'success' | 'error';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegistrationCredentials extends LoginCredentials {
  firstName: string;
}

interface UseDirectusAuthResult {
  authenticate: (
    mode: AuthMode,
    credentials: LoginCredentials | RegistrationCredentials
  ) => Promise<boolean>;
  message: string;
  status: AuthStatus;
}

const errorMessages: Record<string, string> = {
  FAILED_VALIDATION: 'Проверьте правильность заполнения полей.',
  INVALID_CREDENTIALS: 'Неверный email или пароль.',
  INVALID_PAYLOAD: 'Проверьте правильность заполнения полей.',
  RECORD_NOT_UNIQUE: 'Аккаунт с таким email уже существует.',
  USER_SUSPENDED: 'Доступ к аккаунту приостановлен.',
};

function getRequestErrorMessage(error: unknown): string {
  if (isDirectusError(error)) {
    const directusError = error.errors[0];
    const code = directusError?.extensions.code;

    if (code && errorMessages[code]) {
      return errorMessages[code];
    }

    return directusError?.message || 'Не удалось выполнить запрос.';
  }

  if (
    error instanceof Error &&
    error.message === 'Directus не вернул токен авторизации.'
  ) {
    return error.message;
  }

  return 'Не удалось связаться с Directus. Проверьте соединение и попробуйте ещё раз.';
}

export function useDirectusAuth(): UseDirectusAuthResult {
  const [status, setStatus] = useState<AuthStatus>('idle');
  const [message, setMessage] = useState('');

  const authenticate = useCallback(
    async (
      mode: AuthMode,
      credentials: LoginCredentials | RegistrationCredentials
    ) => {
      setStatus('loading');
      setMessage('');

      try {
        if (mode === 'signup') {
          const registrationCredentials =
            credentials as RegistrationCredentials;

          await directus.request(
            registerUser(
              registrationCredentials.email,
              registrationCredentials.password,
              {
                first_name: registrationCredentials.firstName,
              }
            )
          );
        }

        const authData = await directus.login(
          {
            email: credentials.email,
            password: credentials.password,
          },
          {
            mode: 'json',
          }
        );

        if (!authData.access_token) {
          throw new Error('Directus не вернул токен авторизации.');
        }

        setStatus('success');
        setMessage(
          mode === 'signup'
            ? 'Аккаунт создан. Выполняется вход...'
            : 'Вход выполнен. Открываю личный кабинет...'
        );

        return true;
      } catch (error) {
        setStatus('error');
        setMessage(getRequestErrorMessage(error));
        return false;
      }
    },
    []
  );

  return {
    authenticate,
    message,
    status,
  };
}
