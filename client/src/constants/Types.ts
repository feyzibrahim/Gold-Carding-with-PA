export interface UserTypes {
  email: string;
  password: string;
  id?: number;
  name?: string;
  role?: "admin" | "provider" | "payer";
}
