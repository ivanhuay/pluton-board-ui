import React from 'react';
import styles from './styles.module.scss'
import {useSelector,useDispatch} from 'react-redux';
import classNames from 'classnames/bind';
import {closeModal, updateValue} from '../../actions/modal'
import {addList} from '../../actions/boards';
const cx = classNames.bind(styles);

const Modal = () => {
  const dispatch = useDispatch();
  const modal = useSelector(state => state.modal);
  const boards = useSelector(state => state.boards);
  return (<div onClick={()=>{dispatch(closeModal());}} className={cx('root',{open: modal.isOpen})}>
    <div onClick={(event)=>event.stopPropagation()} className={cx('box')}>
      <h2>Add List</h2>
      <input type="text" onChange={(e)=>dispatch(updateValue(e.target.value))} value={modal.value}/>
      <button onClick={()=>dispatch(addList(boards.data._id, modal.value))} className={cx('btn')}>Agregar</button>
    </div>
  </div>);
}

export default Modal;
