import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from '../dashboard2/dashboard2'
import BillingCycle from '../billingCycle/billingCycle'

export default props => (
    <Router history={hashHistory}>
        <Route path='/dashboard' component={Dashboard} />
        <Route path='billingCycle' component={BillingCycle} />
        <Redirect from='*' to='/' />
    </Router>
)