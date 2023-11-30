import React from 'react';
import './Footer.css';
import { getFooterCopy, getFullYear } from '../utils/utils';
import { AppContext } from '../App/AppContext';

export default function Footer() {
  const { user } = React.useContext(AppContext);
  return (
    <React.Fragment>
        <hr/>
        {user.isLoggedIn && <p><a href='#'>Contact us</a></p>}
        <p>Copyright {getFullYear()} - {getFooterCopy(0)}</p>
    </React.Fragment>
  )
}
