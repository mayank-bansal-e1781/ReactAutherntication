import React, { Component } from 'react';
import axios from 'axios';
import classnames from 'classnames';
class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange (e) {
    this.setState({[e.target.name]: e.target.value});
  }
  onSubmit (e) {
    e.preventDefault();
    let User = {
      username: this.state.username,
      password: this.state.password
    };
    axios.post('/api/users/login', User)
    .then((res) => {
      localStorage.setItem('token', res.data.token);
      this.props.history.push(`/app`)

    })
    .catch((err) => {
      this.setState({errors: err.response.data})
    })
  };
  render () {
    let {errors} = this.state;
    return (
      <div className='login'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 m-auto'>
              <h1 className='display-4 text-center'>Log In</h1>
              <p className='lead text-center'>
                Sign in to your account
              </p>
              <form onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    className={classnames('form-control form-control-lg', { 'is-invalid': errors.username})}
                    placeholder='User name'
                    onChange={this.onChange}
                    value={this.state.username}
                    name='username' />
                    {errors.username && (<div className='invalid-feedback'>
                                     {errors.username}
                                   </div>)}
                </div>
                <div className='form-group'>
                  <input
                    type='password'
                    className={classnames('form-control form-control-lg', { 'is-invalid': errors.password})}
                    placeholder='Password'
                    onChange={this.onChange}
                    value={this.state.password}
                    name='password' />
                    {errors.password && (<div className='invalid-feedback'>
                                     {errors.password}
                                   </div>)}
                </div>
                <input type='submit' className='btn btn-info btn-block mt-4' />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
