import React from 'react';
import styles from './Form.module.scss';

interface SelectFieldProps {
  id: string;
  label: string;
  options: { value: string; label: string }[];
  register: any;
  error?: string;
}

export const SelectField: React.FC<SelectFieldProps> = ({ id, label, options, register, error }) => {
  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>{label}</label>
      <select id={id} {...register} className={error ? styles.inputError : styles.input}>
        <option value="">-- Select an option --</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

