import logo from './logo.svg';
import Navbar from './Navbar';
import './App.css';

function App() {

  const navbarMenuItems = ["hello world", "test", "ok"];

  return (
    <div className="App">
      <Navbar
        navbarOptions={navbarMenuItems}
      >
      </Navbar>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;