import { useState, type FormEvent } from 'react';
import {
  useDirectusAuth,
  type AuthMode,
} from '../../hooks/useDirectusAuth';

interface Props {
  formId: string;
  mode: AuthMode;
  submitLabel: string;
}

interface FieldErrors {
  email?: string;
  firstName?: string;
  password?: string;
}

export default function AuthForm({ formId, mode, submitLabel }: Props) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const { authenticate, message, status } = useDirectusAuth();
  const isSignup = mode === 'signup';

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: FieldErrors = {};
    const normalizedEmail = email.trim();
    const normalizedFirstName = firstName.trim();

    if (isSignup && !normalizedFirstName) {
      nextErrors.firstName = 'Введите имя.';
    }

    if (!normalizedEmail) {
      nextErrors.email = 'Введите email.';
    }

    if (!password) {
      nextErrors.password = 'Введите пароль.';
    }

    setFieldErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const success = await authenticate(
      mode,
      isSignup
        ? {
            email: normalizedEmail,
            firstName: normalizedFirstName,
            password,
          }
        : {
            email: normalizedEmail,
            password,
          }
    );

    if (success) {
      window.location.replace('/cabinet');
    }
  };

  return (
    <form id={formId} onSubmit={handleSubmit} noValidate>
      {isSignup && (
        <div
          className={`form-group field-signupform-username required${fieldErrors.firstName ? ' has-error' : ''}`}
        >
          <p>
            <input
              type="text"
              id={`${formId}-first-name`}
              className="form-control"
              name="first_name"
              placeholder="Имя"
              autoComplete="given-name"
              aria-invalid={Boolean(fieldErrors.firstName)}
              aria-required={true}
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
            <span className="error-message">{fieldErrors.firstName}</span>
          </p>
        </div>
      )}

      <div
        className={`form-group field-${isSignup ? 'signup' : 'login'}form-email required${fieldErrors.email ? ' has-error' : ''}`}
      >
        <p>
          <input
            type="email"
            id={`${formId}-email`}
            className="form-control"
            name="email"
            placeholder="Email"
            autoComplete="email"
            aria-invalid={Boolean(fieldErrors.email)}
            aria-required={true}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <span className="error-message">{fieldErrors.email}</span>
        </p>
      </div>

      <div
        className={`form-group field-${isSignup ? 'signup' : 'login'}form-password required${fieldErrors.password ? ' has-error' : ''}`}
      >
        <p>
          <input
            type="password"
            id={`${formId}-password`}
            className="form-control"
            name="password"
            placeholder="Пароль"
            autoComplete={isSignup ? 'new-password' : 'current-password'}
            aria-invalid={Boolean(fieldErrors.password)}
            aria-required={true}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <span className="error-message">{fieldErrors.password}</span>
        </p>
      </div>

      <button
        type="submit"
        className="btn btn-blue"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Отправка...' : submitLabel}
      </button>

      {message && (
        <p
          className={status === 'success' ? 'text-success' : 'text-error'}
          role={status === 'error' ? 'alert' : 'status'}
          aria-live="polite"
        >
          {message}
        </p>
      )}
    </form>
  );
}
