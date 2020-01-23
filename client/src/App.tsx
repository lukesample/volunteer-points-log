import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Auth from './containers/Auth/Auth';
import View from './containers/View/View';
import Entry from './containers/Entry/Entry';
import Dashboard from './containers/Dashboard/Dashboard';
import logo from './logo.svg';
import './App.scss';

const App: React.FC = () => {
  const routes = (
    <Switch>
      <Route path='/login' component={Auth} />
      <Route path='/entry' component={Entry} />
      <Route path='/view' component={View} />
      <Route path='/' component={Dashboard} />
      <Redirect to='/login' />
    </Switch>
  )

  return (
    <Layout>{routes}</Layout>
    // <div className='App'>
    //   <header className='App-header'>
    //     <img src={logo} className='App-logo' alt='logo' />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className='App-link'
    //       href='https://reactjs.org'
    //       target='_blank'
    //       rel='noopener noreferrer'
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
};

export default withRouter(App);
