import React, { Component } from 'react'
import imgLoja from '../arquivos/imagens/imgLoja.png'
import CardProduto from '../ui/CardProduto'
import { base } from '../config/fire'
import imgProd1 from '../arquivos/imagens/imgProd.jpg';
import { Link } from 'react-router';
import { fire } from '../config/fire'
import { hashHistory } from 'react-router';
// import CardProdutoADM from './CardProdutoADM'

class MinhaLoja extends Component {

  constructor() {
    super();
    this.state = {
      loja:[],
      key: null,
      produto:{}
    }
    this.listItem = this.listItem.bind(this)
  }
  
  componentDidMount() {
    const user = fire.auth().currentUser;
    var uid = "";
    if (user != null){
       uid = user.uid;
    }
      base.syncState( 'Loja/' + uid , {
          context: this,
          state: 'loja',
          asArray: true
      })
      base.syncState( 'Produtos/', {
        context: this,
        state: 'produto',
        asArray: false
    })
  } 
  
  logout() {
    fire.auth().signOut();
  }
  listItem(key, produto){
    return(
      <CardProduto title={produto.nome}
              preco={produto.preco}
              tipo={produto.tipo}
              validade={produto.validade}
              loja={produto.loja}/>
    )
  }

  render() {
    
    return (
      <div>
        {console.log((this.state.produto))}
        {JSON.stringify(this.state.produto)}
        <div className="row media">
          <div className="col-5">
            <img className="imgLoja2-0 align-self-center mr-3" src={imgLoja} alt="Imagem da loja" />
          </div>

          <div className="col-5">

            <h1 className="card-title">{this.state.loja[2]}</h1>
            <h5 className="card-text">{this.state.loja[1]}</h5>
            <h5 className="card-text">Produtos: {this.state.loja[3]}</h5>
            <h5 className="card-text">{this.state.loja[0]}</h5>

            <button onClick={this.logout}>Sair</button>
          </div>
          

        </div>
        <br />
        <div className="dropdown-divider"></div>
        <br />
        <Link to='/novoproduto' className="btn btn-secondary active btn-block">Nova Promoção</Link>
        <br />
        <div className="dropdown-divider"></div>
        <br />

        <div className="conteiner text-center">
          <div className="row">
          {/* estou sem a key */}
          {/* {Object
          .keys(this.state.loja)
          .map(key => this.listItem(key, this.state.produto[key]))} */}
          </div>
          

        </div>
        
      </div>
      
    )
  }
}

export default MinhaLoja

 // handleEdit(){
  //   var user = fire.auth().currentUser;
  //   var uid;
  //   if (user != null){
  //      uid = user.uid;
  //   }
  //   const nomeProd = this.state.nomeProd
  //   const tipo = this.tipo.value
  //   const descricao = this.descricao.value
  //   const preco = this.state.email
  //   const validade = this.validade.value

  //   base.update('Produtos/' + uid, {
  //     data: {
  //       nomeProd,
  //       tipo,
  //       descricao,
  //       preco,
  //       validade
  //     }
  //   }).catch(error => {
  //     console.log(error)
  //   })
  // }