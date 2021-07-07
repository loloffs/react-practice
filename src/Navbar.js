import './App.css';

function Navbar(props) {

  const  { navbarOptions } = props;

  return (
    <div className="Navbar-container">
      {navbarOptions.map(x => {
        <div className="menuOptions">
          {x}
        </div>
      })}
    </div>
  );
}

export default Navbar;