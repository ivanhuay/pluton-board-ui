import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getBoardLists } from '../../actions/boards';
const Home = () => {
  const dispatch = useDispatch();
  const boards = useSelector(state => state.boards);
  useEffect(() => {
    dispatch(getBoardLists());
  }, []);
  return (<div className={styles.root}>
    <div className={styles.container}>
      <h1>Create New Board</h1>
    </div>
  </div>);
}

export default Home;
