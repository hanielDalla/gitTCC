import React, { Component } from 'react'
import { base } from '../config/fire'
import CardProduto from '../ui/CardProduto'
import {Link} from 'react-router'

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      produto: [],
      produtos: [],
      produtos2: [],
      produtos3: []
    }
    this.listItem = this.listItem.bind(this)
  }

  componentDidMount() {
    base.syncState('Produtos/', {
      context: this,
      state: 'produto',
      asArray: false
    })
    // var key = "-LDwzaI3N1lxpHNZgcAH"
    // base.syncState('Produtos/' + key, {
    //   context: this,
    //   state: 'produtos',
    //   asArray: false
    // })
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

  listItem(key, produto){
    return(
    <div className="col-12 col-sm-4" key={key}>
            <div className="card">
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
        <div className="row">
          {/* <CardProduto nome={this.state.produtos["nome"]}
            tipo={this.state.produtos["tipo"]}
            preco={this.state.produtos["preco"]}
            descricao={this.state.produtos["descricao"]}
            validade={this.state.produtos["validade"]}
            nomeLoja={this.state.produtos["nomeLoja"]}
            imgLoja={this.state.produtos["imgLoja"]}
            imgProd={this.state.produtos["imgProd"]} />
          <CardProduto {...this.state.produtos2}/>
          <CardProduto {...this.state.produtos3}/> */}
        {
          Object
            .keys(this.state.produto)
            .map(posicaoVet => {
                return this.listItem(posicaoVet, this.state.produto[posicaoVet])
            })
        }
        </div>
      </div>
    )
  }
}