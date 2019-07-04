import React from 'react';
import {Link} from 'react-router-dom';
import Container from '../container';
import styles from './style.module.scss';

const Nav = () => {

  return (
    <nav className={styles.nav}>
      <Container>
        <div className={styles['flex-container']}>
          <Link to="/"><h3>Pluton Board</h3></Link>
        </div>
      </Container>
    </nav>
  );
};

export default Nav;
