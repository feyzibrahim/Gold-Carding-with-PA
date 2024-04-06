export interface UserEntity {
  id?: number;
  name: string;
  email: string;
  password: string;
  role: "admin" | "provider" | "payer";
}
