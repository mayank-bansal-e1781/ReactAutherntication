import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: localStorage.getItem('token')
    }
  }
  render () {
    return (
      <nav className='navbar navbar-expand-sm navbar-dark bg-dark mb-4'>
        <div className='container'>
          <Link className='navbar-brand' to='/'> User Authentication System
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#mobile-nav'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='mobile-nav'>
            
              {
                this.state.token? <button type="button" class="btn btn-danger" onClick={
                  () => {
                    localStorage.removeItem('token')
                    window.location.href = '/'
                  }
                }>Logout</button>
                
              : 
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                  <Link className='nav-link' to='/register'> Sign Up
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/login'> Login
                  </Link>
                </li>
              </ul>
              }
          </div>
        </div>
      </nav>
    );
  }
}
export default navbar;
