import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import './Header.css';

export default function Header() {
  return (
    <React.Fragment>
        <img src={logo} width={'150px'} height={'150px'} alt='logo'></img>
        <h1>School dashboard</h1>
    </React.Fragment>
  )
}
