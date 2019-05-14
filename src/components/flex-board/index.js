import React,{useState} from 'react';
import styles from './styles.module.scss';
const defaultLists = [
  {title: 'todo', list:[]},
  {title: 'in progress', list:['use new hooks']},
  {title: 'random', list:[]},
  {title: 'done', list:['drag & drop items','grid-colomns', 'flex-columns', 'add some css']},
];
const FlexBoard = ({}) => {
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
      <div className={styles.root} >
        {lists && lists.map((list, index)=>{
          return <div key={index} className={styles.col}>
              <div className={styles.title}>
                <h3>{list.title}</h3>
              </div>
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

export default FlexBoard;
