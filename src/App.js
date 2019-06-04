import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './views/home';
import BoardView from './views/board-view';
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
        <Route exact path="/" component={Home}/>
        <Route exact path="/board/:boardId" component={BoardView}/>
    </Router>
  );
}

export default App;
