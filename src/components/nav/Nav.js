import React from 'react';
import {Link} from 'react-router-dom';
import Container from '../container';
import styles from './style.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../actions/user';
const Nav = () => {
  const dispatch = useDispatch();
  const user = useSelector((state)=>state.user);
  const loggedIn = ()=> user && user.profile;
  return (
    <nav className={styles.nav}>
      <Container>
        <div className={styles['flex-container']}>
          <Link to="/"><h3>Pluton Board</h3></Link>
          {!loggedIn() &&
            <ul>
                <li>
                  <a href={`https://github.com/login/oauth/authorize?scope=user:email:public_repo&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}`}>Login With Github</a>
                </li>
            </ul>
          }
          {loggedIn() &&
            <ul className={styles['list']}>
                <li>
                    {user.profile.username}
                </li>
                <li onClick={()=>dispatch(logout())}>
                  Logout
                </li>
            </ul>
          }
        </div>
      </Container>
    </nav>
  );
};

export default Nav;
