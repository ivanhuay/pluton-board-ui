import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import RepositoriesList from '../../components/repositories-list';
import Container from '../../components/container';
import {getRepositories} from '../../actions/user';
import {getBoard} from '../../actions/boards';
import {Link} from 'react-router-dom';
import styles from './styles.module.scss';
const Integration = ({match})=> {
    const dispatch = useDispatch();
    const boards = useSelector((state)=>state.boards);
    const repositories = useSelector((state)=>state.user.repositories);
    const loadingRepositories = useSelector((state)=>state.user.loadingRepositories);
    useEffect(()=>{
      if(!repositories){
        dispatch(getRepositories());
      }
    },[dispatch, repositories, boards, match.params.boardId]);
    useEffect(()=>{
      if(!boards.title){
        dispatch(getBoard(match.params.boardId));
      }
    },[boards.title, dispatch, match.params.boardId])
    return (<Container className={styles.integration}>
      <h1 className={styles.title}><Link to={`/board/${boards.data._id}`}>{boards.title}</Link> > Integration</h1>
      {loadingRepositories&&
        <p>loading...</p>
      }
      {repositories &&
        <RepositoriesList boardId={match.params.boardId} repositories={repositories}/>
      }
    </Container>)
}

export default Integration;
