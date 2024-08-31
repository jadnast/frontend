import React, { FC } from 'react';
import styles from './Input.module.scss';
import { InputProps } from './Input.types';

export const Input: FC<InputProps> = ({children, name, type, minlength, pattern, disabled, showLabel, label, showSecondaryLabel, secondaryLabel, required, onChange, value}) => {
  return (
    <div className={`${styles.input_block}`}>
      <div className={`${styles.input_block_label}`}>
        {showLabel && 
          <label htmlFor={name} className={`${styles.input_block_label__first}`}>{label}</label>
        }
        {showSecondaryLabel && 
          <label htmlFor={name} className={`${styles.input_block_label__secondary}`}>{secondaryLabel}</label>
        }
      </div>
      <input className={`${type ? styles[`input_${type}`] : ''}`}
        name={name} 
        id={name} 
        type={type}
        minLength={minlength}
        pattern={pattern}
        placeholder={children ? String(children) : ''} 
        disabled={disabled ? true : false}
        required={required ? true : false}
        onChange={onChange}
        value={value ?? ''}
      />
    </div>
  );
};