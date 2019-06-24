import React from 'react';
import styles from './styles.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import {setList, setMovingItem, moveTicket} from '../../actions/boards';

const FlexBoard = () => {
    const dispatch = useDispatch();
    const lists = useSelector(state => state.boards.lists);
    const boardId = useSelector(state => state.boards.data._id);
    const movingItem = useSelector(state => state.boards.movingItem);
    const fromIndex = useSelector(state => state.boards.fromIndex);

    const onDragStart = (event, taskName, listName) => {
      dispatch(setMovingItem(taskName,listName));
    }
    const onDragOver = (event) => {
        event.preventDefault();
    }
    const onDrop = (event, listName) => {
        let listCopy = Object.assign({}, lists);
        listCopy[fromIndex] = listCopy[fromIndex].filter((elm)=>elm !== movingItem);
        listCopy[listName].push(movingItem);
        dispatch(moveTicket(boardId, movingItem._id, listName));
        dispatch(setList(listCopy));
    }
    return (
      <div className={styles.root} >
        {lists && Object.keys(lists).map((list)=>{
          return <div key={list} className={styles.col}>
              <div className={styles.title}>
                <h3>{list}</h3>
              </div>
              <div onDragOver={(e)=>{onDragOver(e, list)}} onDrop={(e)=>{onDrop(e, list)}} className={styles.list}>
                  {lists[list].map((item)=>(
                    <div key={item._id} onDragStart={(e)=>{onDragStart(e,item, list)}} className={styles.draggableItem} draggable="true">
                        <p>{item.title}</p>
                    </div>
                  ))}
              </div>
            </div>
        })}
      </div>
    );
}

export default FlexBoard;
