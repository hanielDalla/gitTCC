import React, { Component } from 'react';
import { base } from '../config/fire'
import { Link } from 'react-router';

class Lojas extends Component {
  constructor() {
    super();
    this.state = {
      lojas: [],
      key: null,
      lojas2: [],
      loja: []
    }
    this.listItem = this.listItem.bind(this)
  }
  componentDidMount() {
    base.syncState('Loja/', {
      context: this,
      state: 'loja',
      asArray: false
    })
  }

  listItem(key, loja) {
    return (
      <div className="col-12 col-sm-4" style={{ paddingTop: '7px' }} key={key}>
        <div className="card row">
          <img className="card-img-top rounded mx-auto d-block imagemLoja2" src={loja.imgLoja} alt="Foto loja" />
          <div className="card-body">
            <Link className="trataLink card-title" to={`/loja/${key}`} >{loja.Nome}</Link>
            <h5 className="card-title">{loja.Email}</h5>
            <p className="card-text">{loja.Endereco}</p>
            <Link className="btn btn-primary edit" to={`/loja/${key}`} >Visitar Loja</Link>
          </div>
        </div>
      </div>
    )
  }

  render() {

    return (
      <div className="row">
        {/* <CardLojas nome={this.state.lojas["Nome"]}
            email={this.state.lojas["Email"]}
            imgLoja={this.state.lojas["imgLoja"]}
            endereco={this.state.lojas["Endereço"]}/>
          <CardLojas nome={this.state.lojas2["Nome"]}
            email={this.state.lojas2["Email"]}
            imgLoja={this.state.lojas2["imgLoja"]}
            endereco={this.state.lojas2["Endereço"]}/>   */}
        {
          Object
            .keys(this.state.loja)
            .map(posicaoVet => {
              return this.listItem(posicaoVet, this.state.loja[posicaoVet])
            })
        }
      </div>
    );
  }
}
export default Lojas;
