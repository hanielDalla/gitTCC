import React, { Component } from 'react'
import { base } from '../config/fire'
import { Link } from 'react-router';
import { fire } from '../config/fire'
// import excluir from '../arquivos/imagens/Excluir.ico'


class MinhaLoja extends Component {

  constructor() {
    super();
    this.state = {
      loja: [],
      produto: [],
    }
    this.listItem = this.listItem.bind(this)
    this.ativacao = this.ativacao.bind(this)
    this.remover = this.remover.bind(this)
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



  remover(key) {
    base.remove('Produtos/' + key)
      .then(() => {
        console.log('Apagado com sucesso')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  ativacao(key, produto) {
    if (produto.ativacao === false) {
      base.update('Produtos/' + key, {
        data: {
          ativacao: true
        }
      })
        .catch(error => {
          console.log(error)
        })
    } else {
      base.update('Produtos/' + key, {
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

            <div className="dropdown">
              <button className="btn btn-light dropdown-toggle 100%" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Gerenciar</button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <div className='delete-button' onClick={() => { if (window.confirm('Tem certeza que deseja excluir esta promoção?')) this.remover(key) }} >
                  <button type="button" data-toggle="modal" className="dropdown-item" data-target="#confirm">Excluir</button>
                </div>
                <button type="button" className="dropdown-item">Editar</button>
                <button className="dropdown-item" onClick={() => this.ativacao(key, produto)}>{produto["ativacao"] ? "Desativar" : "Ativar"}</button>
              </div>
            </div>

          </div>



          <div className="card-body">
            <img className="imagemLoja" src={produto["imgLoja"]} alt="Imagem da Loja" />
            <Link className="trataLink card-title" to={`/loja/${produto["loja"]}`} >{produto["nomeLoja"]}</Link>
          </div>
          <img className="card-img-bottom" style={{ height: '250px', width: '1fr' }} src={produto["imgProd"]} alt="Imagem do Produto" />
          <div className="card-body">
            <h5 className="card-title" style={{ fontWeight: 'bold' }}>{produto["nome"]}</h5>

            <p>Descricão: {produto["descricao"]}</p>
            {produto["preco"] ? <p className="card-text verde right" style={{ fontWeight: 'bold' }}>R$ {produto["preco"]}</p> : ""}
            <p className="card-text right"><small className="text-muted">Valido até: {produto["validade"]}</small></p>
            

          </div>
        </div>
      </div>
    )
  }

  render() {

    return (
      <div>

        <div className="row media">
          <div className="col-5">
            <img className="imgLoja2-0 align-self-center mr-3" src={this.state.loja["imgLoja"]} alt="Imagem da loja" />
          </div>
          <div className="col-5">
            <h1 className="card-title">{this.state.loja["Nome"]}</h1>
            <h5 className="card-text">{this.state.loja["Endereco"]}</h5>
            <h5 className="card-text">{this.state.loja["Email"]}</h5>
            <h5 className="card-text">{this.state.loja["Telefone"]}</h5>
            <h5 className="card-text">{this.state.loja["Celular"]}</h5>
          </div>
          <div className="col-1">
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
                  if (this.state.produto[posicaoVet].nomeLoja === this.state.loja.Nome) {
                    if (this.state.produto[posicaoVet].ativacao === true) {
                      return this.listItem(posicaoVet, this.state.produto[posicaoVet])
                    } else return ""
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
                if (this.state.produto[posicaoVet].nomeLoja === this.state.loja.Nome) {
                  if (this.state.produto[posicaoVet].ativacao === false) {
                    return this.listItem(posicaoVet, this.state.produto[posicaoVet])
                  } else return ""
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