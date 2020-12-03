import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import Posts from './containers/Posts/Posts';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Toolbar />
        <Switch>
          <Route path="/" exact render={() => <h1>Home</h1>} />
          <Route path="/posts" exact component={Posts} />
          <Route render={() => <h1>Not found.</h1>} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
