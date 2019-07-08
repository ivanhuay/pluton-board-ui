import React, {useEffect} from 'react';
import styles from './styles.module.scss';
import {Link} from 'react-router-dom';
const BoardHeader = ({toggleModal, toggleNewTicket, boardId}) => {
    return (
      <ul className={styles.root}>
          <li onClick={()=>toggleModal()}>add List</li>
          <li onClick={()=>toggleNewTicket()}>New Ticket</li>
          <li><Link to={`/board/${boardId}/integration`}>Integration</Link></li>
      </ul>
    );
}

export default BoardHeader;
