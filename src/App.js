import React from 'react';
import './App.css';
import HomePage from './pages/home/HomePage';
import UserPage from './pages/user/UserPage';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/user/:user'>
                    <UserPage />
                </Route>
                <Route path='/'>
                    <HomePage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
