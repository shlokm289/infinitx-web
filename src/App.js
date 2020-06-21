import React from 'react';
//routing
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
//pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

const App = () => {

    return (
        <>
            <Router>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/login' component={LoginPage} />
                    <Redirect to='/' />
                </Switch>
            </Router>
        </>
    );
}

export default App;
