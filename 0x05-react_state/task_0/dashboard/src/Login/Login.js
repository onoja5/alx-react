import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <React.Fragment>
        <div className={css(loginStyles.appBody)}> 
          <p>Login to access the full dashboard</p><br></br><br></br> <br></br>
          <label htmlFor="email">Email: </label> 
          <input name="email" type="email" id="email" className={css(loginStyles.inputs)}></input>
          <label htmlFor="password">Password: </label>
          <input name="password" type="password" id="password" className={css(loginStyles.inputs)}></input>
          <button className={css(loginStyles.button)}>OK</button>
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
button: {
  '@media (max-width: 900px)': {
    width: '40px',
    backgroundColor: 'white',
    border: '2px solid orange'
  }
}
  
}); 

export default Login;
