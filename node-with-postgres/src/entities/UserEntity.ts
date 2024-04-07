export interface UserEntity {
  id?: number;
  name: string;
  email: string;
  password: string;
  role: "admin" | "provider" | "payer";
  payer_id?: string;
  provider_id?: string;
}
