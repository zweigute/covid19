import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './login/Login';
import Home from './home/Home'; 
import Users from './users/Users'; 

function App() {
  return (
    <main className="App">
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/home" component={Home} exact /> 
        <Route path="/users" component={Users} exact /> 
      </Switch>
    </main>
  );
}
export default App;