import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import './Header.css';
import { AppContext } from '../App/AppContext';

export default function Header() {
  const { user, logOut } = React.useContext(AppContext);
  return (
    <>
      <img src={logo} width={'150px'} height={'150px'} alt='logo'></img>
      <h1>School dashboard</h1>
      {user.isLoggedIn &&
      (<section className='logoutSection'>
        Welcome <strong>{user.email}</strong><em><a href='#' onClick={logOut}>(logout)</a></em>
      </section>)
      }
    </>
  )
}
