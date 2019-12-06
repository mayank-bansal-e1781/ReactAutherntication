import React, { Component } from 'react';
import axios from 'axios';
import classnames from 'classnames';
class Register extends Component {
  constructor (props) {
    super(props);
    this.countries = ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"];
    this.state = {
      username: '',
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      country: '',
      gender: '',
      cpassword: '',
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange (e) {
    this.setState({[e.target.name]: e.target.value});
    console.log(e);
  }
  onSubmit (e) {
    e.preventDefault();
    let newUser = {
      username: this.state.username,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
      country: this.state.country,
      gender: this.state.gender,
      cpassword: this.state.cpassword
    };
    console.log(newUser);
    axios.post('/api/users/register', newUser)
      .then((result) => {
        this.props.history.push(`/login`)
      })
      .catch((err) => {
        this.setState({errors: err.response.data});
      });
  }
  render () {
    let {errors} = this.state;
    return (
      <div className='register'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 m-auto'>
              <h1 className='display-4 text-center'>Sign Up</h1>
              <p className='lead text-center'>
                Create your account
              </p>
              <form onSubmit={this.onSubmit} noValidate>
                <div className='form-group'>
                  <input
                    type='text'
                    className={classnames('form-control form-control-lg', { 'is-invalid': errors.username})}
                    placeholder='User name'
                    name='username'
                    required
                    value={this.state.username}
                    onChange={this.onChange} />
                  {errors.username && (<div className='invalid-feedback'>
                                     {errors.username}
                                   </div>)}
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    className={classnames('form-control form-control-lg', { 'is-invalid': errors.firstname})}
                    placeholder='First name'
                    name='firstname'
                    required
                    value={this.state.firstname}
                    onChange={this.onChange} />
                  {errors.firstname && (<div className='invalid-feedback'>
                                     {errors.firstname}
                                   </div>)}
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    className={classnames('form-control form-control-lg', { 'is-invalid': errors.lastname})}
                    placeholder='Last name'
                    name='lastname'
                    required
                    value={this.state.lastname}
                    onChange={this.onChange} />
                  {errors.lastname && (<div className='invalid-feedback'>
                                     {errors.lastname}
                                   </div>)}
                </div>
                <div className='form-group'>
                  <input
                    type='email'
                    className={classnames('form-control form-control-lg', { 'is-invalid': errors.email})}
                    placeholder='Email Address'
                    name='email'
                    value={this.state.email}
                    onChange={this.onChange} />
                  {errors.email && (<div className='invalid-feedback'>
                                      {errors.email}
                                    </div>)}
                </div>
                <div className='form-group'>
                  <input
                    type='password'
                    className={classnames('form-control form-control-lg', { 'is-invalid': errors.password})}
                    placeholder='Password'
                    name='password'
                    value={this.state.password}
                    onChange={this.onChange} />
                  {errors.password && (<div className='invalid-feedback'>
                                         {errors.password}
                                       </div>)}
                </div>
                <div className="form-group">
                  <label>Select Country</label>
                  <select className="form-control" name="country" onChange={this.onChange}>
                  {
                    this.countries.map((v,i)=>{
                      return <option value={v} key={i}>{v}</option>
                    })
                  }
                  </select>
                </div>
                <div className="form-group">
                  <label>Select Gender</label>
                  <br></br>
                  <input type="radio" name="gender" onChange={this.onChange} value='Male'/>
                  <label className="radio-inline mr-5 ml-2">
                    Male
                  </label>
                  <input type="radio" name="gender"  onChange={this.onChange} value='Female' />
                  <label className="radio-inline ml-2">
                  Female
                  </label>
                </div>
                <div className='form-group'>
                  <input
                    type='password'
                    className={classnames('form-control form-control-lg', { 'is-invalid': errors.cpassword})}
                    placeholder='Confirm Password'
                    name='cpassword'
                    value={this.state.cpassword}
                    onChange={this.onChange} />
                  {errors.cpassword && (<div className='invalid-feedback'>
                                          {errors.cpassword}
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
export default Register;
