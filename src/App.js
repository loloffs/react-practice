import logo from './logo.svg';
import Navbar from './Navbar';
import MainPage from './MainPage';
import './App.css';

function App() {

  const menuItems = ["hello world", "test", "ok"];

  return (
    <div className="App">
      <Navbar
        navbarOptions={menuItems}
      >
      </Navbar>
      <MainPage

      ></MainPage>
       
    </div>
  );
}

export default App;