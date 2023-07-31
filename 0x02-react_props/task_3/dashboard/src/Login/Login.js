import React from 'react';
import './Login.css';

function Login() {
  return (
    <React.Fragment>
    <div className="App">
        <body className="App-body"> 
          <p>Login to access the full dashboard</p><br></br><br></br> <br></br>
          <label htmlFor="email">Email: </label> 
          <input name="email" type="email" id="email"></input>
          <label htmlFor="password">Password: </label>
          <input name="password" type="password" id="password"></input>
          <button>OK</button>
        </body>
     
    </div>
    </React.Fragment>
  );
}

export default Login;
