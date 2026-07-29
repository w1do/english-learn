import { useEffect, useState } from 'react';
import { DIRECTUS_ACCESS_TOKEN_KEY } from '../lib/directus';

export interface SubscriptionData {
  id: string;
  status: string;
  expired_at: string | null;
  plan?: string;
}

export function useSubscription() {
  const [subscription, setSubscription] = useState<SubscriptionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    async function fetchSubscription() {
      const token = localStorage.getItem(DIRECTUS_ACCESS_TOKEN_KEY);
      if (!token) {
        setLoading(false);
        setIsSubscribed(false);
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
          const sub = data.subscription;
          setSubscription(sub);
          
          if (sub && sub.expired_at) {
            const expiryDate = new Date(sub.expired_at);
            const now = new Date();
            setIsSubscribed(expiryDate > now);
          } else {
            setIsSubscribed(false);
          }
        } else {
          setIsSubscribed(false);
        }
      } catch (error) {
        console.error('Failed to fetch subscription', error);
        setIsSubscribed(false);
      } finally {
        setLoading(false);
      }
    }

    fetchSubscription();
  }, []);

  return { subscription, isSubscribed, loading };
}
