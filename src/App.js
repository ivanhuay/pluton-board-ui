import React from 'react';
import './App.scss';
import Home from './views/home';
import BoardView from './views/board-view';
import Integration from './views/integration';
import NewBoard from './views/new-board';
import LoginCallback from './views/login-callback';
import {Route, Switch} from "react-router-dom";
import history from './app-history';
import { ConnectedRouter } from 'connected-react-router';
import Nav from './components/nav';

function App() {
  return (
    <ConnectedRouter history={history}>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/board/new" component={NewBoard}/>
          <Route exact path="/board/:boardId" component={BoardView}/>
          <Route exact path="/board/:boardId/integration" component={Integration}/>
          <Route exact path="/callback" component={LoginCallback}/>
        </Switch>
    </ConnectedRouter>
  );
}

export default App;
