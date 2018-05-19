import React, { Component } from 'react'
import { base, fire } from '../config/fire'
import LoginTest from '../conteiner/LoginTest'

class NovoProduto extends Component {
    constructor(props) {

        super(props);
        this.state = {
          user: LoginTest.uid,
          Produtos: {},
          Loja: [],
          key: null
        }
    
        this.handleSave = this.handleSave.bind(this)
      }
    
      componentDidMount() {
        base.syncState('Produtos', {
          context: this,
          state: 'Produtos',
          asArray: false
        })
      }  
    
      handleSave(event) {
        var user = fire.auth().currentUser;
        var uid;
        if (user != null){
          uid = user.uid;
        }
        event.preventDefault()
        const nome = this.nome.value
        const tipo = this.tipo.value
        const descricao = this.descricao.value
        const preco = this.preco.value
        const ativacao = this.ativacao.checked ? true : false
        const loja = uid
        const validade = this.validade.value

        base.syncState( 'Loja/' + uid, {
          context: this,
          state: 'Loja',
          asArray: true
      })
    
        this.state.key ?
          base.update('Produtos/' + this.state.key, {
            data: {
              nome,
              tipo,
              descricao,
              preco,
              ativacao,
              loja,
              validade
            }
          }).then(() => {
            this.setState({
              key: null
            })
          }).catch(error => {
            console.log(error)
          })
          :
          base.push('Produtos', {
            data: {
              nome,
              tipo,
              descricao,
              preco,
              ativacao,
              loja,
              validade
            }
          }).catch(error => {
            console.log(error)
          })
        this.nome.value = ''
        this.tipo.value = ''
        this.descricao.value = ''
        this.preco.value = ''
        this.ativacao.value = ''
        this.nome.focus()
      }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSave}>
                    <div >
                        <label htmlFor="nomeProd">Nome do Produto</label>
                        <input ref={ref => this.nome = ref} type="text" required="true" className="form-control" id="nomeProd" placeholder="Ex: Pizza" />

                        <br />

                        <div >
                            <label htmlFor="tipo">Tipo de Produto</label>
                            <select ref={ref => this.tipo = ref} id="tipo" className="form-control">
                                <option value="0">Nenhuma</option>
                                <option value="Alimento">Alimento</option>
                                <option vlaue="Vestimentas">Vestimentas</option>
                                <option value="Eletronicos">Eletronicos</option>
                                <option value="Moveis">Moveis</option>
                                <option vlaue="Serviços">Serviços</option>
                                <option value="Eletrodomesticos">Eletrodomesticos</option>
                                <option value="Saúde">Saúde</option>
                                <option value="Lazer">Lazer</option>
                                <option value="Escolar">Escolar</option>
                                <option value="Outro">Outro</option>
                            </select>
                        </div>
                    </div>


                    <br />

                    <div className="form-group">
                        <label htmlFor="imagemProd">Foto Produto</label>
                        <input type="file" className="form-control-file" id="imagem" />
                    </div>

                    <br />

                    <div className="form-group">
                        <label htmlFor="descricao">Descrição da Promoção</label>
                        <input ref={ref => this.descricao = ref} type="text" required="true" className="form-control" id="descricao" placeholder="Ex: Sabor: Laranja" />
                    </div>


                    <br />

                    <div className="form-group">
                        <label htmlFor="preco">Preço Final</label>
                        <input type="number" ref={ref => this.preco = ref} required="false" step="0.01" className="form-control" id="preco" placeholder="Ex: R$: 35,00" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="validade">Data de termino</label>
                        <input type="date" ref={ref => this.validade = ref} required="true"  className="form-control" id="validade" />
                    </div>

                    <div className="form-group">
                        <input type="checkbox" ref={ref => this.ativacao = ref} id="ativacao" /> ativado?<br/>
                    </div>

                    <br />

                    <button type="submit" className="btn btn-primary btn-lg">Cadastrar Produto</button>

                </form>
            </div>
        )
    }
}
export default NovoProduto