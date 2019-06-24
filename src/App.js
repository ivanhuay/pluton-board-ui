import React from 'react';
import './App.css';
import Home from './views/home';
import BoardView from './views/board-view';
import NewBoard from './views/new-board';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import history from './app-history';
import { ConnectedRouter } from 'connected-react-router'

function App() {
  return (
    <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/board/new" component={NewBoard}/>
          <Route exact path="/board/:boardId" component={BoardView}/>
        </Switch>
    </ConnectedRouter>
  );
}

export default App;
