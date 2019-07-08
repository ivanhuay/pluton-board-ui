import React, {useEffect} from 'react';
import queryString from 'query-string';
import {loginGithub} from '../../actions/user';
import { useDispatch } from 'react-redux';
const LoginCallback = ({location}) => {
  const dispatch = useDispatch();
  useEffect(()=>{
    let values = queryString.parse(location.search);
    if(values.code){
      dispatch(loginGithub(values.code));
    }
  },[dispatch, location.search]);

  return (
    <div>Please Wait...</div>
  );

};

export default LoginCallback;
