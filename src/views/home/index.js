import React, {useEffect} from 'react';
import Board from '../../components/board';
import FlexBoard from '../../components/flex-board';
import BoardHeader from '../../components/board-header';
import Modal from '../../components/modal';
import styles from './styles.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {getBoard} from '../../actions/boards';
const Home = () => {
  const dispatch = useDispatch();
  const boards = useSelector(state => state.boards);
  useEffect(() => {
    if (!boards.title) {
      dispatch(getBoard("5cf5621669130a15faf046e1"))
    }
  });
  return (<div className={styles.root}>
    <div className={styles.container}>
      {
        !boards.loadingBoard
          ? <>
            <BoardHeader />
            <h1>{boards.title}</h1>
            < FlexBoard /> <Board/>
            <Modal/></>
          : <p>loading...</p>
      }
    </div>
  </div>);
}

export default Home;
