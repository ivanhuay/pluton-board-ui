import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getBoardLists } from '../../actions/boards';
import FormNewBoard from '../../components/form-new-board';
import {createBoard} from '../../actions/boards'

const Home = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.boards.loadingCreateBoard);
  return (<div className={styles.root}>
    <div className={styles.container}>
      <h1>Create New Board</h1>
      {loading && <p>loading...</p>}
      <FormNewBoard onSubmit={(data)=>{dispatch(createBoard(data));}}/>

    </div>
  </div>);
}

export default Home;
