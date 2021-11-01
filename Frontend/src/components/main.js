import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Posts } from './pages/Posts';
import { Users } from './pages/Users';

const Main = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact exact component={Posts} />
                <Route path="/profile" component={Users} />
            </Switch>
        </Router>
    )
}

export default Main;