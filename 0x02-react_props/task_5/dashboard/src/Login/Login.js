import React from 'react';
import './Login.css';

export default function Login() {
  return (
    <React.Fragment>
        <hr/>
        <p>Login to access the full dashboard</p>
        <br/>
        <label>
        Email:
        <input type='email' name='email' />
        </label>
        <label>
        Password:
        <input type='password' name='password' />
        </label>
        <button>OK</button>
  </React.Fragment>
  )
}
