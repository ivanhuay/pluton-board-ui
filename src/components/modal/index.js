import React from 'react';
import styles from './styles.module.scss'
import {useSelector,useDispatch} from 'react-redux';
import classNames from 'classnames/bind';
import {closeModal} from '../../actions/modal'
const cx = classNames.bind(styles);

const Modal = () => {
  const dispatch = useDispatch();
  const modal = useSelector(state => state.modal);
  return (<div  onClick={()=>{dispatch(closeModal());}} className={cx('root',{open: modal.isOpen})}>
    <div onClick={(event)=>event.stopPropagation()} className={cx('box')}>
      <h2>Add List</h2>
      <input type="text"/>
      <button className={cx('btn')}>Agregar</button>
    </div>
  </div>);
}

export default Modal;
