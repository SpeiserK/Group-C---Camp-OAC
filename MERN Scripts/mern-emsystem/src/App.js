import logo from './image2vector.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="Rotary-logo" alt="logo"/>
        <p>
          This is our logo
        </p>

        <a
          className="App-link"
          //href="https://reactjs.org"
          href="index.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

     
  );
}

export default App;
