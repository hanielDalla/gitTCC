import React from 'react';
import { Link } from 'react-router';
const NavbarDonw = (props) => {

    return (
        <nav className="fixed-bottom navbar-dark bg-dark">
                <ul className="navbar-nav gridiar ">

                            <Link to='/' className="edit rexpeita active"> <li className="nav-item">Promoções</li></Link>
                            <Link to='/lojas' className="edit rexpeita" ><li className="nav-item">Lojas</li></Link>
                            <Link to='/outros' className="edit rexpeita" ><li className="nav-item">Outros</li></Link>

                </ul>
        </nav>
    )

}
export default NavbarDonw;
