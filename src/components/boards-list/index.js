import React from 'react';
import styles from './styles.module.scss';
import {Link} from 'react-router-dom';

const BoardList = ({boards}) => {
    return (
      <ul className={styles.root}>
          {boards.map((board)=>(
            <li key={board._id}><Link to={`/board/${board._id}`}>{board.title}</Link></li>
          ))}
          <li><Link className={styles.newBoard} to='/board/new'>New Board</Link></li>
      </ul>
    );
}

export default BoardList;
