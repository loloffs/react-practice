import './App.css';

function Navbar(props) {

  const  { navbarOptions } = props;

  return (
    <div className="Navbar-container">
      {navbarOptions.map(x => {
        <div className="text">
          {x}
        </div>
      })}
    </div>
  );
}

export default Navbar;