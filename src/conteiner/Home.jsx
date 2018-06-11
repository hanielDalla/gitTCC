import React, { Component } from 'react'
import { base } from '../config/fire'
import {Link} from 'react-router'


export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      produto: [],
    }
    this.listItem = this.listItem.bind(this)
  }

  componentDidMount() {
    base.syncState('Produtos/', {
      context: this,
      state: 'produto',
      asArray: false
    })
  }

  listItem(key, produto){
    return(

        <div className="col-12 col-sm-4" key={key} style={{marginBotton:'100px'}}>
          <div className="card">
            <div className="card-body row">
              <img className="imagemLoja" src={produto["imgLoja"]} alt="Imagem da Loja"/>
              <p className="trataLink card-title black"  >{produto["nomeLoja"]}</p>  
            </div>
            <img className="card-img-bottom" style={{height: '250px', width: '1fr'}} src={produto["imgProd"]} alt="Imagem do Produto"/>
              <div className="card-body">
                <h5 className="card-title" style={{fontWeight: 'bold'}}>{produto["nome"]}</h5>
                <p>Descricão: {produto["descricao"]}</p>
                {produto["preco"] ? <p className="card-text verde right" style={{ fontWeight: 'bold' }}>R$ {produto["preco"]}</p> : ""}
                <p className="card-text right"><small className="text-muted">Valido até: {produto["validade"]}</small></p>    
              </div>   
          </div>
          <div style={{height:'10px'}}></div>
        </div>
        
    )}


  render() {
    return (
      <div>
        
        <div className="card-deck">
        
        {
          Object
            .keys(this.state.produto)
            .map(posicaoVet => {
              if (this.state.produto[posicaoVet].ativacao === true) {
                return this.listItem(posicaoVet, this.state.produto[posicaoVet])
              }else return ""
            })
        }
        </div>
      </div>
    )
  }
}