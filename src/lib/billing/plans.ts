export type BillingPlanId = 'month' | 'quarter' | 'year';

export interface BillingPlan {
  id: BillingPlanId;
  title: string;
  description: string;
  amount: number;
  durationMonths: number;
  recurring: boolean;
}

export const BILLING_PLANS: Record<BillingPlanId, BillingPlan> = {
  month: {
    id: 'month',
    title: '1 месяц',
    description: 'Ежемесячная подписка MySimpleEnglish',
    amount: 1,
    durationMonths: 1,
    recurring: false,
  },
  quarter: {
    id: 'quarter',
    title: '3 месяца',
    description: 'Доступ к MySimpleEnglish на 3 месяца',
    amount: 2590,
    durationMonths: 3,
    recurring: false,
  },
  year: {
    id: 'year',
    title: '12 месяцев',
    description: 'Доступ к MySimpleEnglish на 12 месяцев',
    amount: 8990,
    durationMonths: 12,
    recurring: false,
  },
};

export function getBillingPlan(value: unknown): BillingPlan | null {
  return typeof value === 'string' && value in BILLING_PLANS
    ? BILLING_PLANS[value as BillingPlanId]
    : null;
}

export function findBillingPlanByAmount(
  amount: number,
  recurring: boolean,
): BillingPlan | null {
  return (
    Object.values(BILLING_PLANS).find(
      (plan) => plan.amount === amount && plan.recurring === recurring,
    ) ?? null
  );
}
