import React from 'react';
import logo from '../arquivos/imagens/logo.jpg'
import { Link } from 'react-router';


const Navbar = (props) => {

  return (
    <nav className="navbar-dark bg-dark navTop navbar-expand-lg fixed-top">
      <Link to='/' className="navbar-brand col"><img src={logo} alt="logo" style={{height:'25px'}}/></Link>

      <Link className="navbar-brand" to="/logintest">Minha Loja</Link>
    </nav>
  )

}
export default Navbar;
