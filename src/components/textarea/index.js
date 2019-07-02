import React from 'react';
import styles from './styles.module.scss';

const TextArea = (props) => {

  return (
    <textarea className={styles.root} {...props}>{props.childs}</textarea>
  );
};

TextArea.defaultProps = {
  value: '',
};

export default TextArea;
