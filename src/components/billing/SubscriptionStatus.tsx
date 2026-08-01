import { useSubscription } from '../../hooks/useSubscription';

export default function SubscriptionStatus() {
  const { subscription, isSubscribed, loading } = useSubscription();

  if (loading) return null;
  if (!isSubscribed || !subscription?.expired_at) return null;

  const expiryDate = new Date(subscription.expired_at);

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
