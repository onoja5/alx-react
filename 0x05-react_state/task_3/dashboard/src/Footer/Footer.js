import './Footer.css';
import { getFooterCopy, getFullYear } from '../utils/utils';
import { AppContext } from '../App/AppContext';
import React, { useContext } from 'react';


function Footer() {
  const { user } = useContext(AppContext);
  return (
    <footer className='App-footer'>
      {user.isLoggedIn && <p><a href="#" >Contact Us</a></p>}
       <p>{getFooterCopy()} - {getFullYear()} </p></footer>
      
  );
}

export default Footer;
