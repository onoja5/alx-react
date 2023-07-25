import logo from './holberton-logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> School dashboard</h1>
        <body> <p>Login to access the full dashboard</p></body>
        <footer className='App-footer'> <p>{getFooterCopy(true)} - {getFullYear()} </p></footer>
      </header>
    </div>
  );
}

export default App;
