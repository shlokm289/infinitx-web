import React from 'react';
//routing
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//pages
import HomePage from './pages/HomePage';


const App = () => {

    return (
            <Router>
                <Switch>
                    <Route to='/' component={HomePage} />
                </Switch>
            </Router>
    );
}

export default App;
