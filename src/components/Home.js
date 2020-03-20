import React, { Component } from 'react'
import Navbar from './Navbar'
import Addblog from './Addblog'
import getblog from './getblog'
import allblog from './allblog'
import logout from './logout'
import {BrowserRouter as Router,Switch,Route
  } from "react-router-dom";
export class Home extends Component {
    render() {
        return (
            <div>
                <Router>
                <Navbar/> 
                    <Switch>
                        <Route path="/Addblog" component={Addblog} />
                        <Route path="/getblog" component={getblog} />
                        <Route path="/allblog" component={allblog} />
                        <Route path="/logout" component={logout} />

                    </Switch>
                </Router>

                
            </div>
        )
        
    }
}

export default Home
