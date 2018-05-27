import React from 'react';
import { Link } from 'react-router';

const Navbar = (props) => {

  return (
    <nav className="navbar-dark bg-dark navTop navbar-expand-lg fixed-top">
      <Link to='/' className="navbar-brand col">NovApp</Link>

      <Link className="navbar-brand" to="/logintest">Minha Loja</Link>
    </nav>
  )

}
export default Navbar;
