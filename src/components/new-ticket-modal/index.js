import React, {useState} from 'react';
import styles from './styles.module.scss'
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Input from '../input';
import TextArea from '../textarea';
const cx = classNames.bind(styles);

const NewTicketModal = ({title, cta, callback, open, hide}) => {
  const [ticketTitle, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (<div onClick={()=>hide()} className={cx('root',{open: open})}>
    <div onClick={(event)=>event.stopPropagation()} className={cx('box')}>
      <h2>{title}</h2>
      <Input type="text" onChange={(e)=>setTitle(e.target.value)} value={ticketTitle}/>
      <TextArea type="text" onChange={(e)=>setDescription(e.target.value)} value={description} placeholder="description"/>
      <button onClick={()=>callback({title: ticketTitle, description})} className={cx('btn')}>{cta}</button>
    </div>
  </div>);
}

NewTicketModal.defaultProps = {
  title: '',
  cta: 'Add',
  open: false,
};

NewTicketModal.propTypes = {
  title: PropTypes.string,
  cta: PropTypes.string,
  open: PropTypes.bool,
  callback: PropTypes.func.isRequired,
  hide: PropTypes.func.isRequired,
};


export default NewTicketModal;
