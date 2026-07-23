import { useState } from 'react';
import { directus } from '../../lib/directus';
import type { BillingPlanId } from '../../lib/billing/plans';

interface CheckoutButtonProps {
  planId: BillingPlanId;
}

export default function CheckoutButton({ planId }: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function startCheckout() {
    if (loading) {
      return;
    }

    setLoading(true);
    setError('');

    try {
      const token = await directus.getToken();

      if (!token) {
        window.location.replace('/');
        return;
      }

      const response = await fetch('/api/billing/checkout', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ planId }),
      });
      const body = (await response.json().catch(() => null)) as
        | { redirectUrl?: string; error?: string }
        | null;

      if (response.status === 401) {
        window.location.replace('/');
        return;
      }

      if (!response.ok || !body?.redirectUrl) {
        throw new Error(body?.error || 'Не удалось начать оплату');
      }

      window.location.assign(body.redirectUrl);
    } catch (checkoutError) {
      setError(
        checkoutError instanceof Error
          ? checkoutError.message
          : 'Не удалось начать оплату',
      );
      setLoading(false);
    }
  }

  return (
    <>
      <button
        className="btn btn-blue"
        type="button"
        disabled={loading}
        onClick={startCheckout}
      >
        {loading ? 'Перехожу к оплате…' : 'Перейти к оплате'}
      </button>
      {error && (
        <p className="checkout-error" role="alert">
          {error}
        </p>
      )}
    </>
  );
}
