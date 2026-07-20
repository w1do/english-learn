import { useState } from 'react';

export default function SignupLoginForm() {
    const [mode, setMode] = useState<'signup' | 'login'>('signup');

    return (
        <>
            <div className="reg" style={{ display: mode === 'signup' ? '' : 'none' }}>
                <div className="title">Английский в удобном формате</div>
                <span className="slogan">Видеоуроки, карточки и тренировки перевода - всё в одном месте. Создайте аккаунт и начинайте</span>
                <div className="form-wrap">
                    <form id="signup-form" action="/site/signup" method="post">
                        <div className="form-group field-signupform-username required">
                            <p><input type="text" id="signupform-username" className="form-control" name="SignupForm[username]" placeholder="Имя" aria-required={true} /><span className="error-message"></span></p>
                        </div>
                        <div className="form-group field-signupform-email required">
                            <p><input type="text" id="signupform-email" className="form-control" name="SignupForm[email]" placeholder="E-mail" aria-required={true} /><span className="error-message"></span></p>
                        </div>
                        <div className="form-group field-signupform-password required">
                            <p><input type="password" id="signupform-password" className="form-control" name="SignupForm[password]" placeholder="Пароль" aria-required={true} /><span className="error-message"></span></p>
                        </div>
                        <button type="submit" className="btn btn-blue">Начать обучение</button>
                    </form>
                    <p className="acceptance">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5 5L10 12.5L6.875 9.375" stroke="#A0A5B3" strokeWidth="2" strokeMiterlimit="10"></path>
                            <path d="M16.25 8.875V16.25H3.75V3.75H16.125L17.375 2.5H2.5V17.5H17.5V7.625L16.25 8.875Z" fill="#A0A5B3"></path>
                        </svg>
                        Даю согласие на обработку <a href="/page/politika-konfidencialnosti" target="_blank">персональных данных</a>
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
                    <form id="w0" action="/site/login" method="post">
                        <div className="form-group field-loginform-email required">
                            <p><input type="text" id="loginform-email" className="form-control" name="LoginForm[email]" placeholder="Email" aria-required={true} /><span className="error-message"></span></p>
                        </div>
                        <div className="form-group field-loginform-password required">
                            <p><input type="password" id="loginform-password" className="form-control" name="LoginForm[password]" placeholder="Password" aria-required={true} /><span className="error-message"></span></p>
                        </div>
                        <button type="submit" className="btn btn-blue">Войти</button>
                    </form>
                    <p className="acceptance">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5 5L10 12.5L6.875 9.375" stroke="#A0A5B3" strokeWidth="2" strokeMiterlimit="10"></path>
                            <path d="M16.25 8.875V16.25H3.75V3.75H16.125L17.375 2.5H2.5V17.5H17.5V7.625L16.25 8.875Z" fill="#A0A5B3"></path>
                        </svg>
                        Даю согласие на обработку <a href="/page/politika-konfidencialnosti" target="_blank">персональных данных</a>
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
