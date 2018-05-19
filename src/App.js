import React, { Component } from 'react';
// import logo from './arquivos/imagens/logo.png';
import Navbar from './ui/Navbar'
import NavbarDonw from './ui/NavBarDonw';

class App extends Component {
  render() {
    const logo = 'NovApp'
    return (
      <div>
        <Navbar logo={logo} />
        <div className="container teste">
        {this.props.children}
        </div>
        <NavbarDonw logo={logo}/>
      </div>
    );
  }
}

export default App;
