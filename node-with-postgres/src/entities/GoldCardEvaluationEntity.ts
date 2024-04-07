export interface GoldCardEvaluationEntity {
  evaluation_id?: string;
  provider_id: string;
  payer_id: string;
  evaluation_criteria: {
    criteria: string;
    metric: string;
    value: number;
    meets_criteria: boolean;
  }[];
  gold_carding_level: string;
  remarks: string;
  evaluation_date: Date;
}
