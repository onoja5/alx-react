import React, { useEffect, useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

function Login(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableSubmit, setEnableSubmit] = useState(false);
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    props.logIn(e.target.elements.email.value, e.target.elements.password.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (email !== '' && password !== '') {
      setEnableSubmit(true);
    }
    else {
      if (enableSubmit !== false) {
        setEnableSubmit(false);
      }
    }
  }, [email, password]);

  return (
    <React.Fragment>
        <div className={css(loginStyles.appBody)}> 
          <p>Login to access the full dashboard</p>
          <form onSubmit={handleLoginSubmit} >
          <label htmlFor="email">Email: </label> 
          <input name="email" type="email" id="email" className={loginStyles.inputs} value={email} onChange={handleChangeEmail}/> 
          <label htmlFor="password">Password: </label>
          <input name="password" type="password" id="password" className={loginStyles.inputs} value={password} onChange={handleChangePassword}/>
          <input type='submit' value='OK' disabled={!enableSubmit}/>
          </form>
        </div>
     
    </React.Fragment>
  );

}

const loginStyles = StyleSheet.create(
  {
    appBody: {
    borderTop: '4px solid red',
    paddingTop: '20px',
    marginTop: '-3em',
    '@media (max-width: 900px)': {
      display: 'flex',
      flexDirection: 'column',
      alignItems:'space-between'
    }
    },

  inputs: {
    margin: '0 16px 0 8px',
    '@media (max-width: 900px)': {
      display: 'none'
    }
},

  
}); 

Login.propTypes = {
  logIn: PropTypes.func
};

export default Login;
