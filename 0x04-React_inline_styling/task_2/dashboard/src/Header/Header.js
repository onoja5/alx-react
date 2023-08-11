import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

function Header() {
  return(
    <div className={css(headerStyles.appHeader)}>
        <img src={logo} className={css(headerStyles.appLogo)} alt="logo" />
        <h1 className={css(headerStyles.h1)}> School dashboard</h1>
    </div>
  );
}

const headerStyles = StyleSheet.create({
  appHeader: {
    display: 'flex',
    padding: '3em',
  },

  appLogo: {
    height: '20vmin',
    pointerEvents: 'none',
    display: 'flex',
  },

  h1: {
    color: 'red',
    display: 'flex',
    paddingTop: '2em',
  }
})

export default Header;