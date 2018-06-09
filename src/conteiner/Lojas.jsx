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
            <Link className="trataLink card-title"  to={`/loja/${key}`} >{loja.Nome}</Link>
            <p className="card-text">{loja.Endereco}</p>
            <p className="card-text">{loja.Telefone ? loja.Telefone : loja.Celular}</p>
            <Link className="btn btn-primary edit" to={`/loja/${key}`} >Visitar Loja</Link>
          </div>
        </div>
      </div>
    )
  }

  render() {
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
  }
}
export default Lojas;
