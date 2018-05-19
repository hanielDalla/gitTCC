import React, { Component } from 'react';
import CardLojas from '../ui/CardLoja';

class Lojas extends Component{
  loja1 ={
    title: 'Pizza Frita',
    endereco: 'Av. Onde judas negou Jesus',
    action: () => alert('Pizza Frita foi clicado')
  }
  loja2 ={
    title: 'Pizza Frita',
    endereco: 'Av. Onde judas negou Jesus',
    action: () => alert('Pizza Frita foi clicado')
  }
  render() {
    return(
    <div className="row">
    <CardLojas title={this.loja1.title}
    endereco={this.loja1.endereco}
    action={this.loja1.action}/>
    <CardLojas {...this.loja1}/>
    <CardLojas {...this.loja1}/>
    </div>
    );
  }
}
export default Lojas;
