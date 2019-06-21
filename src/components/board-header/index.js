import React from 'react';
import styles from './styles.module.scss';
const BoardHeader = ({toggleModal, toggleNewTicket}) => {
    return (
      <ul className={styles.root}>
          <li onClick={()=>toggleModal()}>add List</li>
          <li onClick={()=>toggleNewTicket()}>New Ticket</li>
      </ul>
    );
}

export default BoardHeader;
