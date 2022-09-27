import React, { Suspense, useEffect, lazy } from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Transactions from './pages/Transactions';
import UserRoute from './routes/UserRoute';
function App() {
  return (
    <>
      <ToastContainer />
      <div className="wrapper">
        <Suspense fallback={null}>
          <Switch>
            <Route exact path="/" component={Home} />
            <UserRoute exact path="/dashboard" component={Dashboard} />
            <UserRoute
              exact
              path="/dashboard/portfolio"
              component={Portfolio}
            />
            <UserRoute
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
