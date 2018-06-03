import React, { Component } from 'react'
import { base } from '../config/fire'
import { Link } from 'react-router';
import { fire } from '../config/fire'
import CardProdutoAdm from '../ui/CardProdutoAdm'
import { hashHistory } from 'react-router'

class MinhaLoja extends Component {

  constructor() {
    super();
    this.state = {
      loja: [],
      produto: [],
    }
    this.listItem = this.listItem.bind(this)
  }

  componentDidMount() {
    const user = fire.auth().currentUser;
    var uid = "";
    if (user != null) {
      uid = user.uid;
    }
    base.syncState('Loja/' + uid + '/', {
      context: this,
      state: 'loja',
      asArray: false
    })

    base.syncState('Produtos/', {
      context: this,
      state: 'produto',
      asArray: false
    })
    // var key2 = "-LDwwjrCb60Wavr4xC_K"
    // base.syncState('Produtos/' + key2, {
    //   context: this,
    //   state: 'produtos2',
    //   asArray: false
    // })
    // var key3 = "-LDmfueXFZI9Vq_2Y7rN"
    // base.syncState('Produtos/' + key3, {
    //   context: this,
    //   state: 'produtos3',
    //   asArray: false
    // })

  }

  logout() {
    fire.auth().signOut();
  }
  listItem(key, produto){
    return(
    <div className="col-12 col-sm-4" key={key}>
            <div className="card">
            <div className="admPart">
                <h4>Parte administrativa</h4>
                <button onClick="">Excluir</button>
                <button onClick="">Editar</button>
                <button onClick="">{produto["ativacao"] ? "Desativar" : "Ativar"}</button>
            </div>
            <div className="card-body">
                <img className="imagemLoja" src={produto["imgLoja"]} alt="Imagem da Loja"/>
                    <Link className="trataLink card-title" to="/loja" >{produto["nomeLoja"]}</Link>  
            </div>
            <img className="card-img-bottom" style={{height: '250px', width: '1fr'}} src={produto["imgProd"]} alt="Imagem do Produto"/>
            <div className="card-body">
                <h5 className="card-title" style={{fontWeight: 'bold'}}>{produto["nome"]}</h5>
                {/* <h5 className="tipo">{props.tipo}</h5> */}
                <p className="card-text verde">Por apenas: R$:{produto["preco"]}</p>
                <p className="card-text"><small className="text-muted">Valido até: {produto["validade"]}</small></p>
                <p>Descricão: </p>
                <p>{produto["descricao"]}</p>
                
            </div>
            </div>
        </div>
    )}

  render() {

    return (
      <div>

        {/* {this.state.teste = this.state.loja["teste"]} */}
        <div className="row media">
          <div className="col-5">
            <img className="imgLoja2-0 align-self-center mr-3" src={this.state.loja["imgLoja"]} alt="Imagem da loja" />
          </div>

          <div className="col-5">
            <h1 className="card-title">{this.state.loja["Nome"]}</h1>
            <h5 className="card-text">{this.state.loja["Endereço"]}</h5>
            <h5 className="card-text">{this.state.loja["Email"]}</h5>
            <button onClick={this.logout}>Sair</button>
          </div>
        </div>

        <br />
        <Link to='/novoproduto' className="btn btn-secondary active btn-block">Nova Promoção</Link>
        <br/>
        <p className="center">Produtos ativos</p>
        <div className="dropdown-divider"></div>


        <div className="conteiner text-center">
          <div className="row">
          {
          Object
            .keys(this.state.produto)
            .map(posicaoVet => {
                return this.listItem(posicaoVet, this.state.produto[posicaoVet])
            })
          }
          {/* <CardProdutoAdm nome={this.state.produtos2["nome"]}
            tipo={this.state.produtos2["tipo"]}
            preco={this.state.produtos2["preco"]}
            descricao={this.state.produtos2["descricao"]}
            validade={this.state.produtos2["validade"]}
            nomeLoja={this.state.produtos2["nomeLoja"]}
            imgLoja={this.state.produtos2["imgLoja"]}
            imgProd={this.state.produtos2["imgProd"]} />
          <CardProdutoAdm {...this.state.produtos3}/> */}
          </div>
        </div>



        <div className="dropdown-divider"></div>
        <p className="center">Produtos inativos</p>
        <div className="dropdown-divider"></div>
        {this.state.loja.teste && <h5>teste: {this.state.loja.teste.nome}</h5>}
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