import React from 'react';
import styles from './styles.module.scss';

const Input = (props) => {

  return (
    <input className={styles.root} {...props}/>
  );
};

Input.defaultProps = {
  type: 'text',
  value: '',
};

export default Input;
