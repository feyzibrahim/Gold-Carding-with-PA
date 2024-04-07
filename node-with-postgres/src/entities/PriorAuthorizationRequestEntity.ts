export interface PriorAuthorizationRequestEntity {
  request_id?: string;
  provider_id: string;
  cpt_code: string;
  metric?: string;
  approval_status?: boolean;
  description: string;
  denial_reason?: string;
  auto_approval?: boolean;
  payer_id: string;
}
