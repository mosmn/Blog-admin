import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Login from '../components/Login';
import CreatePost from '../components/CreatePost';
import EditPost from '../components/EditPost';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/blog/admin/login" component={Login} />
      <Route exact path="/blog/admin/dashboard" component={Dashboard} />
      <Route exact path="/blog/admin/create" component={CreatePost} />
      <Route exact path="/blog/admin/edit/:id" component={EditPost} />
      <Route path="*" component={() => "404 NOT FOUND"} />
    </Switch>
  </Router>
);

export default Routes;