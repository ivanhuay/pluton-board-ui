import React from 'react';
import Board from '../../components/board';
import FlexBoard from '../../components/flex-board';
import styles from './styles.module.scss';

const Home = () => (
    <div className={styles.root}>
      <div className={styles.container}>
        <FlexBoard />
        <Board />
      </div>
    </div>
);

export default Home;
