import React from 'react';
import styles from './Form.module.scss';
import { CheckProps } from '../types/CheckProps';

export const CheckGroups: React.FC<CheckProps> = ({ label, options, register, error }) => {
  return (
    <div className={styles.field}>
      <p className={styles.label}>{label}</p>
      {options.map(option => (
        <label key={option.value} className={styles.checkbox}>
          <input type="checkbox" value={option.value} {...register} />
          {option.label}
        </label>
      ))}
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

