import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/home'; 
import login from './component/login'; 
import Register from './component/register'; 
import BookList from './component/BookList';
import BookList1 from './component/BookList_CS';
import BookList2 from './component/BookList_PCM';
import BookList3 from './component/BookList_Others';
import Account from './component/Account';

import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
import './App.css'; 

class App extends Component { 
  render() { 
    return ( 

      <div className="App">
      <Router>

        <div>
          <div className="header">
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
            <div className="navbarlinks">
              <NavLink activeClassName="active" to="/login">Login</NavLink>
              <NavLink activeClassName="active" to="/register">Register</NavLink>
              <NavLink activeClassName="active" to="/BookList">BookList</NavLink>
              <NavLink activeClassName="active" to="/Account">Account</NavLink>
            </div>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <PublicRoute path="/login" component={login} />
              <PublicRoute path="/register" component={Register} />
              <PrivateRoute exact path="/BookList" component={BookList} />
              <PrivateRoute exact path="/BookList1" component={BookList1} />
              <PrivateRoute exact path="/BookList2" component={BookList2} />
              <PrivateRoute exact path="/BookList3" component={BookList3} />
              <PrivateRoute exact path="/Account" component={Account} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
   ); 
  } 
} 
  
export default App; 