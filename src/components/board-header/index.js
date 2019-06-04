import React from 'react';
import {useDispatch} from 'react-redux';
import {openModal} from '../../actions/modal';
import styles from './styles.module.scss';
const BoardHeader = () => {
    const dispatch = useDispatch();
    return (
      <ul className={styles.root}>
          <li onClick={(e)=>{dispatch(openModal())}}>add List</li>
      </ul>
    );
}

export default BoardHeader;
