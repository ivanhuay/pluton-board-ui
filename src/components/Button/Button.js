import React from 'react';
import styles from './Button.module.scss';
const Button = (props) => {
  const {children} = props
  return  (
    <button className={styles.root} {...props}>{children}</button>
  );
};

export default Button;
