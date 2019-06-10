import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Input = ({type, value, onChange}) => {

  return (
    <input className={styles.root} type={type} value={value} onChange={(e)=>onChange(e)}/>
  );
};

Input.defaultProps = {
  type: 'text',
  value: '',
};

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Input;
