import React, { Component } from 'react';
import Navbar from './ui/Navbar'
import NavbarDonw from './ui/NavBarDonw';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="container teste">
        {this.props.children}
        </div>
        <NavbarDonw />
      </div>
    );
  }
}

export default App;
