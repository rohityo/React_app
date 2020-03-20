import React from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


function App() {
  return (
  <Router>
    <div>
          <Switch>
            <Route path="/Login" component={Login} />
            <Route path="/Signup" component={Signup} />
            <Route path="/Home" component={Home}/>
            <Redirect to="/Login" component={Login} />
          </Switch>
      </div>
  </Router>
    
  );
}

export default App;
