export interface ProviderCptApprovalEntity {
  providerCptApproval_id?: string;
  provider_id: string;
  cpt_code: string;
  approval_status: boolean;
  denial_reason?: string;
}
