import React from 'react';
import './Login.css';
import PropTypes from 'prop-types';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      enableSubmit: false,
    }

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.updateEnableSubmit = this.updateEnableSubmit.bind(this);
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    this.props.logIn(this.state.email, this.state.password)
  }

  updateEnableSubmit(email, password) {
    if (email.length > 0 && password.length > 0) {
      this.setState({ enableSubmit: true })
    }
    else {
      this.setState({ enableSubmit: false })
    }
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value })
    this.updateEnableSubmit(event.target.value, this.state.password)
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value })
    this.updateEnableSubmit(this.state.email, event.target.value)
  }
  
  render() {
    return (
      <React.Fragment>
          <hr/>
          <p>Login to access the full dashboard</p>
          <br/>
          <form onSubmit={this.handleLoginSubmit}>
            <label htmlFor='email'>
            Email:
            <input type='email' name='email' id='email' value={this.state.email} onChange={this.handleChangeEmail} />
            </label>
            <label htmlFor='password'>
            Password:
            <input type='password' name='password' id='password' value={this.state.password} onChange={this.handleChangePassword} />
            </label>
            <input type='submit' disabled={!this.state.enableSubmit} value={'Ok'} />
          </form>
    </React.Fragment>
    )
  }
}

Login.defaultProps = {
  logIn: () => {},
}

Login.propTypes = {
  logIn: PropTypes.func,
}