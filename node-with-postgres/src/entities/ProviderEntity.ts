export interface ProviderEntity {
  id?: number;
  provider_id?: string;
  name: string;
  specialty: string;
  approval_rate: number;
  submission_volume: number;
  readmission_rate: number;
  treatment_guideline_adherence: number;
}
