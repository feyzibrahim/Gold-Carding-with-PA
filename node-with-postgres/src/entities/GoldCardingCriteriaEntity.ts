export interface GoldCardingCriteriaEntity {
  criteria_id?: string;
  description: string;
  metric: string;
  threshold: string;
  operator: string;
  measurement_period_months: number;
  cpt_code: string;
}
