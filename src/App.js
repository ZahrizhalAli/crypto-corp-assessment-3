import React, { Suspense, lazy } from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Transactions from './pages/Transactions';

function App() {
  return (
    <>
      <div className="wrapper">
        <Suspense fallback={null}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/dashboard/portfolio" component={Portfolio} />
            <Route
              exact
              path="/dashboard/transactions"
              component={Transactions}
            />
          </Switch>
        </Suspense>
      </div>
    </>
  );
}

export default App;
