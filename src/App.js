import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import Login from './login.component';
import SignUp from './signup.components';

function App() {
  return (<Router>
          <div className="App">
              <nav className='navbar navbar-expand-lg navbar-light fixed-top'>
                  <div className='container'>
                      <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
                          <ul className='navbar-nav ml-auto'>
                              <li className='nav-item'>
                                  <Link className='nav-link' to='./log-in'>Login</Link>
                              </li>
                              <li className='nav-item'>
                                  <Link className='nav-link' to='/sign-up'>Sign Up</Link>
                              </li>
                          </ul>
                      </div>
                  </div>
              </nav>

              <div className='auth-wrapper'>
                  <div className='auth-inner'>
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route path='/log-in' component={Login} />
                        <Route path='/sign-up' component={SignUp} />
                    </Switch>
                </div>
              </div>
          </div>
      </Router>
  );
}

export default App;
