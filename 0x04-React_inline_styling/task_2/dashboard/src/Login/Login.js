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
          <button>OK</button>
        </div>
     
    </React.Fragment>
  );

}

const loginStyles = StyleSheet.create(
  {
    appBody: {
    borderTop: '4px solid red',
    paddingTop: '40px',
    marginTop: '-3em',
    },

  inputs: {
    margin: '0 16px 0 8px',
}
  
}); 

export default Login;
