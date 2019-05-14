import React,{useState} from 'react';
import styles from './styles.module.scss';
const defaultLists = [
  {title: 'todo', list:['drag & drop items']},
  {title: 'in progress', list:[]},
  // {title: 'random', list:[]},
  // {title: 'random2', list:[]},
  {title: 'done', list:[]},
];
const Board = ({}) => {
    const [lists, setLists] = useState(defaultLists);
    const [movingItem, setMovingItem] = useState({fromIndex:0, task:''});
    const onDragStart = (event, taskName, listIndex) => {
    	setMovingItem({task:taskName, fromIndex: listIndex});
  	}
  	const onDragOver = (event) => {
  	    event.preventDefault();
  	}
    const onDrop = (event, listIndex) => {
        let listCopy = Object.assign([], lists);
        listCopy[movingItem.fromIndex].list = listCopy[movingItem.fromIndex].list.filter((elm)=>elm!= movingItem.task);
        listCopy[listIndex].list.push(movingItem.task);
        setLists(listCopy);
  	}
    return (
      <div className={styles.root} style={{'grid-template-columns': 'repeat('+lists.length+',1fr)'}}>
        {lists && lists.map((list, index)=>{
          return <div key={index} className={styles.col}>
              <h3>{list.title}</h3>
              <div onDragOver={(e)=>{onDragOver(e, index)}} onDrop={(e)=>{onDrop(e, index)}} className={styles.list}>
                  {list.list.map((item)=>(
                    <div key={item} onDragStart={(e)=>{onDragStart(e,item, index)}} className={styles.draggableItem} draggable="true">
                        <p>{item}</p>
                    </div>
                  ))}
              </div>
            </div>
        })}
      </div>
    );
}

export default Board;
