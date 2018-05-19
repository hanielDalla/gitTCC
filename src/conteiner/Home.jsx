import React, { Component } from 'react'
import CardProduto from '../ui/CardProduto'
import { hashHistory } from 'react-router';
import imgLoja1 from '../arquivos/imagens/imgLoja.png';
import imgLoja2 from '../arquivos/imagens/imgLoja2.jpg';
import imgLoja3 from '../arquivos/imagens/imgLoja3.png';
import imgProd1 from '../arquivos/imagens/imgProd.jpg';
import imgProd2 from '../arquivos/imagens/imgProd2.jpg';
import imgProd3 from '../arquivos/imagens/imgProd3.png';
//import imgProd4 from '../arquivos/imagens/imgProd4.jpg';


export default class Home extends Component {

  cardPizzaFrita = {
    imgLoja: imgLoja1,
    loja: 'Pizza Frita',
    imgProduto: imgProd1,
    title: 'Pizza Frita',
    text: '15% de desconto',
    preco: 'R$: 99,99',
    validade: '12/12/2017',
    action: () => hashHistory.push('/produto')
  }

  cardEspetinhoDoJuninho = {
    imgLoja: imgLoja2,
    loja: 'Espetinhos do Juninho',
    imgProduto: imgProd2,
    title: 'Espetinho Suíno',
    text: '10% de desconto',
    preco: 'R$: 33,33',
    validade: '12/12/2017',
    action: () => hashHistory.push('/produto'),
  }

  cardPizzariaDoAldonso = {
    imgProduto: imgProd3,
    loja: 'Pizzaria do Aldonso',
    imgLoja: imgLoja3,
    title: 'Combo Aldonso',
    text: 'R$: 60,00 ',
    preco: 'R$: 65,00',
    validade: '12/12/2017',
    action: () => hashHistory.push('/produto'),
  }

  render() {
    return (
        <div className="conteiner text-center">
          <div className="row">
            <CardProduto title={this.cardPizzaFrita.title}
              preco={this.cardPizzaFrita.preco}
              action={this.cardPizzaFrita.action}
              validade={this.cardPizzaFrita.validade}
              loja={this.cardPizzaFrita.loja}
              imgLoja={this.cardPizzaFrita.imgLoja}
              imgProduto={this.cardPizzaFrita.imgProduto} />
            <CardProduto {...this.cardEspetinhoDoJuninho} />
            <CardProduto {...this.cardPizzariaDoAldonso} />
          </div>
          <div className="dropdown-divider"></div>
          <div className="row">
            <CardProduto {...this.cardPizzaFrita} />
            <CardProduto {...this.cardEspetinhoDoJuninho} />
            <CardProduto {...this.cardPizzariaDoAldonso} />
          </div>
          <div className="dropdown-divider"></div>
          <div className="row">
            <CardProduto {...this.cardPizzaFrita} />
            <CardProduto {...this.cardEspetinhoDoJuninho} />
            <CardProduto {...this.cardPizzariaDoAldonso} />
          </div>
        </div>
        )
      }
}