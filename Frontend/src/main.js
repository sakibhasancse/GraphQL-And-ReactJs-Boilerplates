import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Posts from './pages/Posts';
import { Users } from './pages/Users';
import Navbar from './components/UI/Navbar';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

// const NavRoute = ({ exact, path, component: Component }) => (
//     <Route exact={exact} path={path} render={(props) => (
//         <div>
//             <Navbar />
//             <Component {...props} />
//         </div>
//     )} />
// )

const Main = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Posts} />
                <Route path="/profile" component={Users} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
            </Switch>
        </Router>
    )
}

export default Main;