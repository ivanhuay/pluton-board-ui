import React, {useState, useEffect} from 'react';
import styles from './styles.module.scss'
import {useSelector,useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Input from '../input';
const cx = classNames.bind(styles);

const Modal = ({title, cta, callback, open, hide}) => {
  const [value, setValue] = useState('');
  return (<div onClick={()=>hide()} className={cx('root',{open: open})}>
    <div onClick={(event)=>event.stopPropagation()} className={cx('box')}>
      <h2>{title}</h2>
      <Input type="text" onChange={(e)=>setValue(e.target.value)} value={value}/>
      <button onClick={()=>callback(value)} className={cx('btn')}>{cta}</button>
    </div>
  </div>);
}

Modal.defaultProps = {
  title: '',
  cta: 'Add',
  open: false,
};

Modal.propTypes = {
  title: PropTypes.string,
  cta: PropTypes.string,
  open: PropTypes.bool,
  callback: PropTypes.func.isRequired,
  hide: PropTypes.func.isRequired,
};


export default Modal;
