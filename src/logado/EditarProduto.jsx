import React, { Component } from 'react'
import { base } from '../config/fire'

class EditarProduto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      produtos: [],
      loja: []
    }
    this.handleSave = this.handleSave.bind(this)
  }

  handleSave(key) {
    const nome = this.nome.value
    const tipo = this.tipo.value
    const descricao = this.descricao.value
    const preco = this.preco.value
    const validade = this.validade.value

    base.update('Produtos/' + key, {
        data: {
            nome,
            tipo,
            descricao,
            preco,
            validade,
        }
      }).then(() => {
        this.setState({
          key: null
        })
      }).catch(error => {
        console.log(error)
      })
  }
  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="nomeProd">Nome do Produto</label>
            <input ref={ref => this.nome = ref} type="text" required="true" className="form-control" id="nomeProd" defaultValue={this.props.nome} />
          </div>

          <div className="form-group">
            <label htmlFor="tipo">Tipo de Produto*</label>
            <select ref={ref => this.tipo = ref} defaultValue={this.props.tipo} id="tipo" className="form-control">
              <option value="">Nenhum</option>
              <option value="Alimento">Alimento</option>
              <option value="Vestimentas">Vestimentas</option>
              <option value="Eletronicos">Eletronicos</option>
              <option value="Moveis">Moveis</option>
              <option value="Serviços">Serviços</option>
              <option value="Eletrodomesticos">Eletrodomesticos</option>
              <option value="Saúde">Saúde</option>
              <option value="Lazer">Lazer</option>
              <option value="Escolar">Escolar</option>
              <option value="Outro">Outro</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="descricao">Descrição(Detalhe seu produto ou serviço)*</label>
            <textarea  ref={ref => this.descricao = ref} maxLength="50" className="form-control" required="true" id="descricao" defaultValue={this.props.descricao} rows="3"/>
            
          </div>

          <div className="form-group">
            <label htmlFor="preco">Preço Final</label>
            <input type="number" ref={ref => this.preco = ref} defaultValue={this.props.preco} step="0.01" className="form-control" id="preco" placeholder="Ex: R$: 35,00" />
          </div>

          <div className="form-group">
            <label htmlFor="validade">Data de termino*</label>
            <input type="date" ref={ref => this.validade = ref} required="true" className="form-control" id="validade" />
          </div>

          <br />
          <br/>

          <button type="submit" onClick={() => this.handleSave(this.props.kiss)} className="btn btn-outline-primary btn-block">Atualizar promoção</button>

        </form>
      </div>
    )
  }
}
export default EditarProduto