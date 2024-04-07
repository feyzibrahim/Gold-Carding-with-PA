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
  payer?: {
    payer_id: string;
    name: string;
  };
  provider?: {
    provider_id: string;
    name: string;
  };
}
