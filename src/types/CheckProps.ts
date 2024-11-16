export interface CheckProps {
  label: string;
  options: { value: string; label: string }[];
  register: any;
  error?: string;
}