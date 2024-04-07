export interface UserTypes {
  email: string;
  password: string;
  id?: number;
  name?: string;
  role?: "admin" | "provider" | "payer";
  payer_id?: string;
  provider_id?: string;
}

export interface CptCodeTypes {
  cpt_code: string;
  description: string;
  createdAt: Date;
}

export interface PriorAuthorizationRequestEntity {
  request_id?: string;
  provider_id: string;
  cpt_code: string;
  metric?: string;
  approval_status: boolean;
  denial_reason?: string;
  auto_approval?: boolean;
  description: string;
  provider?: {
    provider_id: string;
    name: string;
  };
  payer?: {
    payer_id: string;
    name: string;
  };
}
