import logo from './holberton-logo.jpg';
import './App.css';

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
      </div>

      <footer>
        <hr />
        <div className="App-footer">
          <p>Copyright 2020 - holberton School</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
