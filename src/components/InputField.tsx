import React from 'react';
import styles from './Form.module.scss';
import { InputProps } from '../types/InputProps';

export const InputField: React.FC<InputProps> = ({ id, label, type = 'text', register, error }) => {
  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>{label}</label>
      <input id={id} type={type} {...register} className={error ? styles.inputError : styles.input} />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};
