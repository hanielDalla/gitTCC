import React, { Component } from 'react'
import { base } from '../config/fire'
import { Link } from 'react-router'


class Loja extends Component {
    constructor(props) {
        super(props);
        this.state = {
            produto: [],
            loja: {},
            isLoadding: false
        }
        this.listItem = this.listItem.bind(this)
    }

    componentDidMount() {
        this.setState({
            isLoadding: true
        })
        base.fetch(`Loja/${this.props.match.params.name}`, { 
            context: this,
            state: 'loja',
            asArray: false,
            then( data ) {
              this.setState({
                loja: data,
                isLoadding: false
              })
            }
          })
        base.syncState('Produtos/', {
            context: this,
            state: 'produto',
            asArray: false
        })
    }

    listItem(key, produto) {
        return (
            <div className="col-12 col-sm-4" key={key}>
                <div className="card">
                    <div className="card-body">
                        <img className="imagemLoja" src={produto["imgLoja"]} alt="Imagem da Loja" />
                        <Link className="trataLink card-title" to="/loja" >{produto["nomeLoja"]}</Link>
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
        if (this.state.isLoadding) {
            return <p>Carregando...</p>
        }
        return (
            <div>
                <div className="row media">
                    <div className="col-5">
                        <img className="imgLoja2-0 align-self-center mr-3" src={this.state.loja.imgLoja} alt="Imagem da loja" />
                    </div>

                    <div className="col-5">
                        <h1 className="card-title">{this.state.loja.Nome}</h1>
                        <h5 className="card-text">{this.state.loja.Endereco}</h5>
                        <h5 className="card-text">{this.state.loja.Email}</h5>
                        <h5 className="card-text">{this.state.loja.Telefone}</h5>
                        <h5 className="card-text">{this.state.loja.Celular}</h5>
                    </div>
                    <div className="col-1">
                        <Link to='/lojas'>Voltar</Link>
                    </div>
                </div>
                <br />
                <p className="center">Produtos ativos</p>
                <br />
                <div className="card-deck">

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
        );
    }
}

export default Loja