import logo from './holberton-logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from './utils';

function App() {
  return (
    <div className="App">
      <header>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>School dashboard</h1>
        </div>
        <hr />
      </header>
      
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <button>OK</button>
      </div>

      <footer>
        <hr />
        <div className="App-footer">
          <p>Copyright {getFullYear()} - {getFooterCopy(Math.random() < 0.5)}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
