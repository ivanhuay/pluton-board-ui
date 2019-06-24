import React, {useEffect} from 'react';
import Board from '../../components/board';
import FlexBoard from '../../components/flex-board';
import BoardHeader from '../../components/board-header';
import Modal from '../../components/modal';
import styles from './styles.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {getBoard, addList, addTicket} from '../../actions/boards';
import {toggleModal} from '../../actions/modal';
import useModal from '../../components/modal/useModal';
const BoardView = ({match}) => {
  const dispatch = useDispatch();
  const boards = useSelector(state => state.boards);
  const modal = useSelector(state => state.modal);
  const ticketModal = useModal();
  useEffect(() => {
    dispatch(getBoard(match.params.boardId));
  }, [dispatch, match.params.boardId]);
  return (<div className={styles.root}>
    <div className={styles.container}>
      {
        !boards.loadingBoard
          ? <>
              <BoardHeader toggleModal={()=>dispatch(toggleModal())} toggleNewTicket={ticketModal.toggle}/>
              <h1>{boards.title}</h1>
              < FlexBoard />
              <Modal title="Add List" open={modal.isOpen} hide={()=>dispatch(toggleModal())} callback={(value)=>dispatch(addList(boards.data._id, value))}/>
              <Modal title="New Ticket" open={ticketModal.isOpen} hide={ticketModal.toggle} callback={(value)=>dispatch(addTicket(boards.data._id, value))}/>
            </>
          : <p>loading...</p>
      }
    </div>
  </div>);
}

export default BoardView;
