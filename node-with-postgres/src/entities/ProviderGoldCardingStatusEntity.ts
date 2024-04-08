export interface ProviderGoldCardingStatusEntity {
  status_id?: string;
  provider_id: string;
  criteria_met: boolean;
  gold_carding_level: string;
  valid_from: Date;
  valid_until: Date;
  payer_id?: string;
}
