export interface SelectProps {
  id: string;
  label: string;
  options: { value: string; label: string }[];
  register: any;
  error?: string;
}