import React, {Component} from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from '../main/appDash'
import FrontEnd from '../FrontEnd/routes'

class App extends Component{
    render(){
        return(
        <div>
            <FrontEnd />
            <Dashboard />
        </div>
        )
    }
}

export default App