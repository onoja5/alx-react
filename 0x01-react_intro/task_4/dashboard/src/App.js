import logo from './holberton-logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> School dashboard</h1>
        <body className="App-body"> 
          <p>Login to access the full dashboard</p><br></br><br></br> <br></br>
          <label htmlFor="email">Email: </label> 
          <input name="email" type="email" id="email"></input>
          <label htmlFor="password">Password: </label>
          <input name="password" type="password" id="password"></input>
          <button>OK</button>
        
        </body>
        <footer className='App-footer'> <p>{getFooterCopy(true)} - {getFullYear()} </p></footer>
      </header>
    </div>
  );
}

export default App;
