import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Posts from './pages/Posts';
import Dashboard from './pages/Dashboard';
import Navbar from './components/UI/Navbar';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Privateroute from './pages/Private-route';

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
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <Route path="/*" render={(props) => {
                    const pathname = props && props.location && props.location.pathname;
                    if (pathname === '/login' || pathname === '/register') {
                        return ''
                    }
                    return <Navbar />
                }} />

                {/* <Route path="/*" render={(props) => {
                    const pathname = props && props.location && props.location.pathname;
                    if (pathname === '/login' || pathname === '/register') {
                        return ''
                    }
                    return < />

                    return <Navbar />
                }} /> */}
                <Route path="/" component={Posts} />
                <Privateroute path="/dashboard" exect component={Dashboard} />
            </Switch>
        </Router>
    )
}

export default Main;