export interface GoldCardingRuleEntity {
  rule_id?: string;
  payer_id: string;
  description: string;
  metric: string;
  threshold: string;
  measurement_period_months: number;
}
