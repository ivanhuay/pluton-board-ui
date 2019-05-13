import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './views/home';
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
        <Route exact path="/" component={Home}/>
    </Router>
  );
}

export default App;
