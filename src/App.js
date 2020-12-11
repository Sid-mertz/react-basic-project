// import Homepage from './pages/home';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import Address from './pages/contact';
import './app.css';
// import ReactLoop from './pages/loop';
// import Todolist from './pages/todo';
import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';


// const { default: Lifecycle } = require("./pages/home/lifecycle");


function App() { 
  return ( 
    <div className="App"> 
      {/* <Homepage/> */}
      {/* <AboutPage/> */}
      {/* <ReactLoop></ReactLoop> */}
      {/* <Todolist/> */}
      {/* <Lifecycle/> */}
      <BrowserRouter>
      <ul className="navigation">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact us</NavLink></li>
      </ul>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/about" component={AboutPage}></Route>
          <Route path="/contact" component={Address}></Route>
        </Switch>
      </BrowserRouter>
    </div> 
  );
}

export default App;
 