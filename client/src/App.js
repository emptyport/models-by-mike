import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Home from './pages/Home';
import FaceMorph from './pages/FaceMorph';
import NotFound from './pages/NotFound';
import './App.css';

const history = createBrowserHistory();

function App() {
    return (
        <div className="App">
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/face-morph" component={FaceMorph} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
