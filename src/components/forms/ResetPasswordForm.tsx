import { useState } from 'react';

export default function ResetPasswordForm() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const res = await fetch('https://n8n.w1do.ru/webhook/requests', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, subject: 'Сброс пароля', project: 'w1do' }),
            });
            if (res.ok) {
                setStatus('success');
                setMessage('Письмо со сбросом пароля отправлено на ваш email.');
            } else {
                setStatus('error');
                setMessage('Произошла ошибка. Попробуйте ещё раз.');
            }
        } catch {
            setStatus('error');
            setMessage('Произошла ошибка. Попробуйте ещё раз.');
        }
    };

    return (
        <form id="request-password-reset-form" onSubmit={handleSubmit}>
            <div className="mb-3 field-passwordresetrequestform-email required">
                <label className="form-label" htmlFor="passwordresetrequestform-email">Email</label>
                <input
                    type="text"
                    id="passwordresetrequestform-email"
                    className="form-control"
                    name="PasswordResetRequestForm[email]"
                    placeholder="E-mail"
                    aria-required={true}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div className="invalid-feedback"></div>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-blue" disabled={status === 'loading'}>
                    {status === 'loading' ? 'Отправка...' : 'Сбросить пароль'}
                </button>
            </div>
            {message && <p className={status === 'success' ? 'text-success' : 'text-error'}>{message}</p>}
        </form>
    );
}
