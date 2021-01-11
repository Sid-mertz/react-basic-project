import React from 'react';
import './assets/scss/style.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './pages/home';
import AboutPage from './pages/about';
// import ContactPage from './pages/contact';

function App() { 
  return ( 
    <div className="App"> 
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/about" component={AboutPage}></Route>
          {/* <Route exact path="/movies" component={ContactPage}></Route> */}
        </Switch>
      </BrowserRouter>
    </div> 
  );
}

export default App;
 