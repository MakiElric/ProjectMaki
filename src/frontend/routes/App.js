import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from '../components/Layout';
import Inicio from '../components/Inicio';

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={Inicio} />
      </Switch>
    </Layout>
  </Router>
);

export default App;
