import React from 'react';
import styles from './styles.module.scss';
import {addRepo} from '../../actions/boards';
import {useDispatch} from 'react-redux';
const RepositoriesList = ({repositories, boardId}) =>{
    const dispatch = useDispatch();
    return (
      <div className={styles.container}>
          {repositories && repositories.map((repository)=>(
              <div className={styles.item} key={repository.id}>
                <h3 className={styles.title}><a href={repository.html_url} target='_blank'>{repository.full_name}</a></h3>
                <p className={styles.description}>{repository.description}</p>
                <button onClick={()=>{dispatch(addRepo(boardId, repository.full_name))}} className={styles['enable-btn']}>Enable</button>
              </div>
          ))}
      </div>
    );
};

export default RepositoriesList;
