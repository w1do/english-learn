import { useEffect, useState } from 'react';
import { DIRECTUS_ACCESS_TOKEN_KEY } from '../../lib/directus';

export default function SubscriptionStatus() {
  const [subscription, setSubscription] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSubscription() {
      const token = localStorage.getItem(DIRECTUS_ACCESS_TOKEN_KEY);
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('/api/billing/subscription', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setSubscription(data.subscription);
        }
      } catch (error) {
        console.error('Failed to fetch subscription', error);
      } finally {
        setLoading(false);
      }
    }

    fetchSubscription();
  }, []);

  if (loading) return null;
  if (!subscription || !subscription.expired_at) return null;

  const expiryDate = new Date(subscription.expired_at);
  const now = new Date();
  const isActive = expiryDate > now;

  if (!isActive) return null;

  return (
    <div className="subscription-status-info text-center" style={{ marginBottom: '2rem', padding: '1rem', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
      <p className="white-text" style={{ margin: 0 }}>
        Ваша подписка активна до{' '}
        <strong style={{ color: '#fff' }}>
          {expiryDate.toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </strong>
      </p>
    </div>
  );
}
