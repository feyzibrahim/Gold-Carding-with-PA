export interface UserTypes {
  email: string;
  password: string;
  id?: number;
  name?: string;
  role?: "admin" | "provider" | "payer";
}

export interface CptCodeTypes {
  cpt_code: string;
  description: string;
  createdAt: Date;
}
