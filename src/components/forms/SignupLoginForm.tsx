import { useState } from 'react';
import AuthForm from './AuthForm';

export default function SignupLoginForm() {
    const [mode, setMode] = useState<'signup' | 'login'>('signup');

    return (
        <>
            <div className="reg" style={{ display: mode === 'signup' ? '' : 'none' }}>
                <div className="title">Английский в удобном формате</div>
                <span className="slogan">Видеоуроки, карточки и тренировки перевода - всё в одном месте. Создайте аккаунт и начинайте</span>
                <div className="form-wrap">
                    <AuthForm
                        formId="signup-form"
                        mode="signup"
                        submitLabel="Начать обучение"
                    />
                    <p className="acceptance">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5 5L10 12.5L6.875 9.375" stroke="#A0A5B3" strokeWidth="2" strokeMiterlimit="10"></path>
                            <path d="M16.25 8.875V16.25H3.75V3.75H16.125L17.375 2.5H2.5V17.5H17.5V7.625L16.25 8.875Z" fill="#A0A5B3"></path>
                        </svg>
                        Даю согласие на обработку персональных данных
                    </p>
                    <div className="links">
                        <span>Есть аккаунт?</span>
                        <a href="#" className="form_change_page_reg" onClick={(e) => { e.preventDefault(); setMode('login'); }}>Войти</a>
                    </div>
                </div>
            </div>

            <div className="sign" style={{ display: mode === 'login' ? '' : 'none' }}>
                <div className="title">Простой способ выучить английский</div>
                <span className="slogan">Короткие задания без скучных уроков в удобное время</span>
                <div className="form-wrap">
                    <AuthForm
                        formId="login-form"
                        mode="login"
                        submitLabel="Войти"
                    />
                    <p className="acceptance">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5 5L10 12.5L6.875 9.375" stroke="#A0A5B3" strokeWidth="2" strokeMiterlimit="10"></path>
                            <path d="M16.25 8.875V16.25H3.75V3.75H16.125L17.375 2.5H2.5V17.5H17.5V7.625L16.25 8.875Z" fill="#A0A5B3"></path>
                        </svg>
                        Даю согласие на обработку персональных данных
                    </p>
                    <div className="links">
                        <a href="#" className="form_change_page_sign" onClick={(e) => { e.preventDefault(); setMode('signup'); }}>Зарегистрироваться</a>
                        <a href="/request-password-reset" className="secondary">Забыли пароль?</a>
                    </div>
                </div>
            </div>
        </>
    );
}
