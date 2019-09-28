import React from 'react';
import { Router, Switch, Route } from 'react-router-dom'
import { history } from './History'

import Home from './Pages/Home'
import Cats from './Pages/Cats'

const Root = () => (
    <Router history={history} >
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cats" component={Cats} />
        </Switch>
    </Router>
)

export default Root;