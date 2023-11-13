import React from 'react'
import logo from '../assets/holberton-logo.jpg';
import './Header.css';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  AppHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'center',
    fontSize: 'calc(6px + 2vmin)',
    color: 'rgb(231, 67, 67)',
  },
  AppLogo: {
    height: '20vmin',
  },
  hr: {
    border: '1px solid rgb(227, 62, 62)',
  }
});
export default function Header() {
  return (
    <header>
        <div className={css(styles.AppHeader)}>
          <img src={logo} className={css(styles.AppLogo)} alt="logo" />
          <h1>School dashboard</h1>
        </div>
        <hr className={css(styles.hr)} />
    </header>
  )
}
