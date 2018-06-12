import React, { Component } from 'react';
import { base } from '../config/fire'
import { Link } from 'react-router';

class Lojas extends Component {
  constructor() {
    super();
    this.state = {
      loja: [],
      lojaSelected: [],
      produtos: [],
      mostra: 0
    }
    this.listItem = this.listItem.bind(this)
    this.listProdutos = this.listProdutos.bind(this)
    this.mostraLoja = this.mostraLoja.bind(this)
  }
  componentDidMount() {
    base.syncState('Loja/', {
      context: this,
      state: 'loja',
      asArray: false
    })
  }

  mostraLoja(key){
    base.fetch('Loja/' + key + '/', { 
      context: this,
      state: 'lojaSelected',
      asArray: false,
      then( data ) {
        this.setState({
          lojaSelected: data,
          mostra: 1,
          key:key
        })
      }
    })
    base.syncState('Produtos/', {
      context: this,
      state: 'produtos',
      asArray: false
    })


  }
  listProdutos(key, produto){
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
                <p className="card-text vermelho" style={{ fontWeight: 'bold' }}>{produto["desconto"]}</p>
                <p>Descricão: {produto["descricao"]}</p>
                {produto["preco"] ? <p className="card-text verde right" style={{ fontWeight: 'bold' }}>R$ {produto["preco"]}</p> : ""}
                <p className="card-text right"><small className="text-muted">Valido até: {produto["validade"]}</small></p>    
              </div>   
          </div>
          <div style={{height:'10px'}}></div>
        </div>
        
    )}


  listItem(key, loja) {
    return (
      <div className="col-12 col-sm-4" style={{ paddingTop: '7px' }} key={key}>
        <div className="card row">
          <img className="card-img-top rounded mx-auto d-block imagemLoja2" src={loja.imgLoja} alt="Foto loja" />
          <div className="card-body">
            <Link className="trataLink card-title"  to={`/loja/${key}`} >{loja.Nome}</Link>
            <p className="card-text">{loja.Endereco}</p>
            <p className="card-text">{loja.Telefone ? loja.Telefone : loja.Celular}</p>
            <button className="btn btn-outline-primary edit" type="button" onClick={() => this.mostraLoja(key)}>Ver Promoções</button>
          </div>
        </div>
      </div>
    )
  }
  voltar() {
    this.setState({
      mostra: 0
    })
  }

  render() {
    if (this.state.mostra === 0) {
    return (
      <div className="card-deck">
        {
          Object
            .keys(this.state.loja)
            .map(posicaoVet => {
              return this.listItem(posicaoVet, this.state.loja[posicaoVet])
            })
        }
      </div>
    );
  }else{
    return (
      <div>
          <div className="row media fundo-branco">
              <div className="col-5">
                  <img className="imgLoja2-0 align-self-center mr-3" src={this.state.lojaSelected.imgLoja} alt="Imagem da loja" />
              </div>

              <div className="col-5">
                  <h1 className="card-title">{this.state.lojaSelected.Nome}</h1>
                  <h5 className="card-text">{this.state.lojaSelected.Endereco}</h5>
                  <h5 className="card-text">{this.state.lojaSelected.Email}</h5>
                  <h5 className="card-text">{this.state.lojaSelected.Telefone}</h5>
                  <h5 className="card-text">{this.state.lojaSelected.Celular}</h5>
              </div>
              <div className="col-1">
                <button type="button" className="btn btn-outline-primary" onClick={() => this.voltar()}>Voltar</button>
              </div>
          </div>
          <br />
          <h5 className="center verde">Produtos ativos</h5>
          <br />
          <div className="card-deck">

              {

                  Object
                      .keys(this.state.produtos)
                      .map(posicaoVet => {
                          if (this.state.produtos[posicaoVet].nomeLoja === this.state.lojaSelected.Nome) {
                              if (this.state.produtos[posicaoVet].ativacao === true) {
                                  return this.listProdutos(posicaoVet, this.state.produtos[posicaoVet])
                              } else return ""
                          } else return ""

                      })
              }
          </div>

      </div>
  );
  }
}
}
export default Lojas;
