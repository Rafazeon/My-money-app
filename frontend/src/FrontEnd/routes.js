import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Front from './index'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Front} />
        <Redirect from='*' to='/' />
    </Router>
)