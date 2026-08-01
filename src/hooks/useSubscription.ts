import { useEffect, useState } from 'react';
import {
  currentUser,
  type SubscriptionData,
} from '../lib/subscription-access';

export function useSubscription() {
  const [subscription, setSubscription] = useState<SubscriptionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    async function fetchSubscription() {
      try {
        const access = await currentUser.getSubscription();
        setSubscription(access.subscription);
        setIsSubscribed(access.isSubscribed);
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
