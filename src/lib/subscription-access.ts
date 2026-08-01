import { directus } from './directus';

export const FREE_EXERCISE_THEME_ID = '1018';

export interface SubscriptionData {
  id: string | number;
  transaction_id: string;
  expired_at: string;
  is_prologation: boolean;
}

export interface SubscriptionAccess {
  subscription: SubscriptionData | null;
  isSubscribed: boolean;
}

let accessRequest: Promise<SubscriptionAccess> | null = null;

async function loadSubscriptionAccess(): Promise<SubscriptionAccess> {
  const token = await directus.getToken();
  if (!token) {
    return { subscription: null, isSubscribed: false };
  }

  const response = await fetch('/api/billing/subscription', {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) {
    throw new Error(`Subscription check failed: ${response.status}`);
  }

  const data = (await response.json()) as SubscriptionAccess;
  return {
    subscription: data.subscription || null,
    isSubscribed: data.isSubscribed === true,
  };
}

export async function getSubscriptionAccess(options: { refresh?: boolean } = {}) {
  if (options.refresh || !accessRequest) {
    accessRequest = loadSubscriptionAccess().catch((error) => {
      accessRequest = null;
      throw error;
    });
  }
  return accessRequest;
}

export function canAccessExercise(themeId: string, isSubscribed: boolean) {
  return isSubscribed || themeId === FREE_EXERCISE_THEME_ID;
}

export const currentUser = {
  async isSubscribed(options: { refresh?: boolean } = {}) {
    return (await getSubscriptionAccess(options)).isSubscribed;
  },
  getSubscription: getSubscriptionAccess,
};
