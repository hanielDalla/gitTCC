import React, { Component } from 'react';
import CardLojas from '../ui/CardLoja';
import { base } from '../config/fire'

class Lojas extends Component {
  constructor() {
    super();
    this.state = {
      lojas: [],
      key: null,
      lojas2: [],
      loja:[]
    }
    // this.listItem = this.listItem.bind(this)
  }
  componentDidMount() {
    base.syncState('Loja/', {
      context: this,
      state: 'loja',
      asArray: false
    })
    // base.syncState('Loja/097DTJHpECcLG2F3XFI4FDUYcxB3', {
    //   context: this,
    //   state: 'lojas',
    //   asArray: false
    // })
    // base.syncState('Loja/h5qwrm7hzpYMC5BaPdbAK28QECL2', {
    //   context: this,
    //   state: 'lojas2',
    //   asArray: false
    // })
  }

  listItem(key, loja) {
    return (
      <div className="col-12 col-sm-4" style={{ paddingTop: '7px' }} key={key}>
      <div className="card row">
      <img className="card-img-top rounded mx-auto d-block imagemLoja2" src={loja.imgLoja} alt="Foto loja" />
        <div className="card-body">
          <h4 className="card-title">{loja.Nome}</h4>
          <h5 className="card-title">{loja.Email}</h5>
          <p className="card-text">{loja.Endereco}</p>
           <a href="" className="btn btn-primary edit" onClick="" >Mais detalhes</a> 
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
