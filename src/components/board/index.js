import React,{useState} from 'react';
import styles from './styles.module.scss';
const defaultLists = [
  {title: 'todo', list:['drag & drop items']},
  {title: 'in progress', list:[]},
  {title: 'done', list:[]},
];
const Board = ({}) => {
    const [lists, setLists] = useState(defaultLists);
    return (
      <div className={styles.root}>
        {lists.map((list)=>{
          return <div className={styles.col}>
              <h3>{list.title}</h3>
              <div className={styles.list}>
                  {list.list.map((item)=>(<p>{item}</p>))}
              </div>
            </div>
        })}
        <div className="col">d</div>
      </div>
    );
}

export default Board;
