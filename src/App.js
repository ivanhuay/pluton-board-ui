import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './views/home';
import BoardView from './views/board-view';
import NewBoard from './views/new-board';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/board/new" component={NewBoard}/>
        <Route exact path="/board/:boardId" component={BoardView}/>
      </Switch>
    </Router>
  );
}

export default App;
