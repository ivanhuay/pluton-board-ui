import React from 'react';
import styles from './Container.module.scss';

const Container = (props) => (

  <div style={{padding: '0 92px',
  height: '100%'}} {...props}>{props.children}</div>
);

export default Container;
