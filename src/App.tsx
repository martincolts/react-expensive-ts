import * as React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home/home';
import Login from './login/login';
import store from './store/store';

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>  
        <Router>
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/home" component={Home}/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App; 
