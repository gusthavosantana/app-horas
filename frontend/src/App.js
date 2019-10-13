import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import Home from './pages/Home';
import Edit from './pages/Edit';

/**
 * Componente principal
 */
export default function App() {
    return (
        <div className="app-container container">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/edit/:id">
                        <Edit />
                    </Route>
                </Switch>
            </Router>
            
        </div>
    );
}
