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
      produto:[],
      produtos:[]
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
        asArray: true
      })

      base.syncState('Loja/' + uid + '/produtos',{
        context: this,
        state: 'produtos',
        asArray: true
      })
  } 
  
  logout() {
    fire.auth().signOut();
  }
  listItem(posicao){
    return(
      <div className="col-12 col-sm-4">
            <div className="card">
            <div className="card-body">
                {/* <img className="imagemLoja" src={produto.imgLoja} alt="Imagem do Produto"/> */}
                    <Link className="trataLink card-title" to="/loja" >{this.state.produto[posicao]}</Link>

            </div>
            {/* <img className="card-img-bottom" style={{height: '250px',  width: '1fr'}} src={produto.imgProduto} alt="Imagem do Produto"/> */}
            <div className="card-body">
                <h5 className="card-title">{this.state.produto[posicao]}</h5>
                <h5 className="tipo">{this.state.produto[posicao]}</h5>
                <p className="card-text">{this.state.produto[posicao]}</p>
                {/* <p className="card-text"><small className="text-muted">Valido até: {produto.validade}</small></p>
                <button className="btn btn-primary" onClick={produto.action}>Ver Promoção</button> */}
            </div>
            </div>
        </div>
    )
  }

  render() {
    var lala = []
    for( var i = 0; i < this.state.produto.length; i++){
      lala.push(i)
      }
    return (
      <div>
        {/*console.log((this.state.produto[1]))*/}
        {JSON.stringify(this.state.produto[this.state.key])}
        {JSON.stringify(this.state.produtos[4])}
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
          
        {/*this.listItem(lala)*/}
          {/* {Object
          .map(this.listItem(1, this.state.produto[1]))} */}
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