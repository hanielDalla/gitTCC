import React, { Component } from 'react'
import { base } from '../config/fire'
import { Link } from 'react-router';
import { fire } from '../config/fire'


class MinhaLoja extends Component {

  constructor() {
    super();
    this.state = {
      loja: [],
      produto: [],
    }
    this.listItem = this.listItem.bind(this)
    this.ativacao = this.ativacao.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
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
  }
  handleRemove(key) {
    base.remove('proprietarios/' + this.state.proprietarios[key].key)
      .then(() => {
        console.log('Sucesso')
      })
      .catch((error) => {
        console.log(error)
      })
  }
  ativacao(key, produto) {
    if (produto.ativacao === false) {
      base.update('Produto/' + key, {
        data: {
          ativacao: true
        }
      })
        .catch(error => {
          console.log(error)
        })
    } else {
      base.update('Produto/' + key, {
        data: {
          ativacao: false
        }
      })
        .catch(error => {
          console.log(error)
        })

    }

  }

  logout() {
    fire.auth().signOut();
  }
  listItem(key, produto) {
    return (
      <div className="col-12 col-sm-4" key={key}>
        <div className="card">
          <div className="admPart">
            <h4>Parte administrativa</h4>
            <button onClick={() => this.handleRemove(key)}>Excluir</button>
            <button onClick="">Editar</button>
            <button onClick={this.ativacao(key, produto)}>{produto["ativacao"] ? "Desativar" : "Ativar"}</button>
          </div>
          <div className="card-body">
            <img className="imagemLoja" src={produto["imgLoja"]} alt="Imagem da Loja" />
            <Link className="trataLink card-title" to="/loja" >{produto["nomeLoja"]}</Link>
          </div>
          <img className="card-img-bottom" style={{ height: '250px', width: '1fr' }} src={produto["imgProd"]} alt="Imagem do Produto" />
          <div className="card-body">
            <h5 className="card-title" style={{ fontWeight: 'bold' }}>{produto["nome"]}</h5>
            {produto["preco"] ? <p className="card-text verde">Por apenas: R$:{produto["preco"]}</p> : ""}
            <p className="card-text"><small className="text-muted">Valido até: {produto["validade"]}</small></p>
            <p>Descricão: {produto["descricao"]}</p>

          </div>
        </div>
      </div>
    )
  }

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
        <br />
        <p className="center">Produtos ativos</p>
        <div className="dropdown-divider"></div>


        <div className="conteiner text-center">
          <div className="row">
            {
              Object
                .keys(this.state.produto)

                .map(posicaoVet => {
                  if (this.state.produto[posicaoVet].ativacao === true) {
                    return this.listItem(posicaoVet, this.state.produto[posicaoVet])
                  } else return ""
                })
            }
          </div>
        </div>

        <div className="dropdown-divider"></div>
        <p className="center">Produtos inativos</p>
        <div className="dropdown-divider"></div>
        <div className="row">
          {
            Object
              .keys(this.state.produto)

              .map(posicaoVet => {
                if (this.state.produto[posicaoVet].ativacao === false) {
                  return this.listItem(posicaoVet, this.state.produto[posicaoVet])
                } else return ""
              })
          }
        </div>
        <div className="conteiner text-center">
          <div className="row">
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