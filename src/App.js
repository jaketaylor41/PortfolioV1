import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {

    let routes = (
      <Switch>
        <Route path="/" component={Home} />
        {/* <Route path="/#projects"/>
        <Route path="/#about"/>
        <Route path="/#contact"/> */}
      </Switch>
    );


    return (
        <Layout>
          {routes}
        </Layout>
    );
  }
}

export default App;
