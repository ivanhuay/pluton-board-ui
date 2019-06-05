import React from 'react';
import styles from './styles.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import {setList, setMovingItem} from '../../actions/boards';

const Board = ({}) => {
    const dispatch = useDispatch();
    const lists = useSelector(state => state.boards.lists);
    const movingItem = useSelector(state => state.boards.movingItem);
    const fromIndex = useSelector(state => state.boards.fromIndex);

    const onDragStart = (event, taskName, listIndex) => {
    	dispatch(setMovingItem(taskName,listIndex));
  	}
  	const onDragOver = (event) => {
  	    event.preventDefault();
  	}
    const onDrop = (event, listIndex) => {
        let listCopy = Object.assign([], lists);
        listCopy[fromIndex].list = listCopy[fromIndex].list.filter((elm)=>elm!= movingItem);
        listCopy[listIndex].list.push(movingItem);
        dispatch(setList(listCopy));
  	}
    return (
      <div className={styles.root} style={{'grid-template-columns': 'repeat('+lists.length+',1fr)'}}>
        {lists && lists.map((list, index)=>{
          return <div key={index} className={styles.col}>
              <h3>{list.title}</h3>
              <div onDragOver={(e)=>{onDragOver(e, index)}} onDrop={(e)=>{onDrop(e, index)}} className={styles.list}>
                  {list.list.map((item)=>(
                    <div key={item._id} onDragStart={(e)=>{onDragStart(e,item, index)}} className={styles.draggableItem} draggable="true">
                        <p>{item.title}</p>
                    </div>
                  ))}
              </div>
            </div>
        })}
      </div>
    );
}

export default Board;
