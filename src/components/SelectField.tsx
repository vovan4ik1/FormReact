import React from 'react';
import styles from './Form.module.scss';
import { SelectProps } from '../types/SelectProps';

export const SelectField: React.FC<SelectProps> = ({ id, label, options, register, error }) => {
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

