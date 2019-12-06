import React, { Component } from 'react';
import Navbar from './Components/layouts/Navbar';
import Landing from './Components/layouts/Landing';
import Footer from './Components/layouts/Footer';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import Dashboard from './Components/Dashboard/dashboard';
import {ProtectedRoute} from './Components/ProtectedRoute/protectedRoute';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';


class App extends Component {
  render () {
    return (
        <Router>
          <div className='App'>
            <Navbar />
            <Route exact path='/' component={Landing} />
            <div className='container'>
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <ProtectedRoute exact path='/app' component={Dashboard}/>
            </div>
            <Footer />
          </div>
        </Router>
    );
  }
}


export default App;
