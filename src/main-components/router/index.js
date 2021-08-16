import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import ErrorPage from '../ErrorPage'
import HomePage from '../HomePage'

const AllRoute = () => {
    return (
        <div className='App'>
            <Router>
                <Switch>
                    <Route exact path='/Portfolio' component={HomePage} />
                    <Route path='/' component={ErrorPage} />
                </Switch>
            </Router>
        </div>
    )
}

export default AllRoute;
