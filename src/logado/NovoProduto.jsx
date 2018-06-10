import React, { Component } from 'react'
import { base, fire } from '../config/fire'
import firebase from 'firebase'

class NovoProduto extends Component {
  constructor(props) {

    super(props);
    this.state = {
      Produtos: [],
      loja: [],
      uploadValue: 0,  
      picture: null
    }

    this.handleSave = this.handleSave.bind(this)
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload (event) {
    var user = fire.auth().currentUser;
    if (user != null) {
    var uid = user.uid;
    }
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref('/Produtos/' + uid + `/${file.name}`);
    const task = storageRef.put(file);

    task.on('state_changed', snapshot => {
        let porcentagem = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.setState({
            uploadValue: porcentagem
        })
    }, error => { console.log(error.message)
    }, () =>{
        this.setState({
            uploadValue:100,
            picture: task.snapshot.downloadURL
        });
    })}

  componentDidMount() {
    var user = fire.auth().currentUser;
    if (user != null) {
    var uid = user.uid;
    }
    base.syncState('Produtos', {
      context: this,
      state: 'Produtos',
      asArray: false
    })
    base.syncState('Loja/' + uid, {
      context: this,
      state: 'loja',
      asArray: false
    })
  }
  

  handleSave(event) {
    event.preventDefault()
    var user = fire.auth().currentUser;
    if (user != null) {
    var uid = user.uid;
    }
    const nome = this.nome.value
    const tipo = this.tipo.value
    const descricao = this.descricao.value
    const preco = this.preco.value
    const ativacao = true
    const imgLoja = this.state.loja.imgLoja
    const nomeLoja = this.state.loja["Nome"]
    const validade = this.validade.value
    const imgProd = this.state.picture
    const loja = uid

    base.syncState('Loja/' + uid, {
      context: this,
      state: 'Loja',
      asArray: true
    })

    base.push('Produtos', {
        data: {
          nome,
          tipo,
          descricao,
          preco,
          loja,
          ativacao,
          imgLoja,
          nomeLoja,
          validade,
          imgProd,
        }
      }).catch(error => {
        console.log(error)
      })

    this.nome.value = ''
    this.descricao.value = ''
    this.preco.value = ''
    this.tipo.value = 0
    this.file.value = null
    this.imgProd = ''
    this.setState({
      picture: null,
      uploadValue: ''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSave}>
          <div className="form-group">
            <label htmlFor="nomeProd">Nome do Produto*</label>
            <input ref={ref => this.nome = ref} type="text" required="true" className="form-control" id="nomeProd" placeholder="Ex: Pizza" />
          </div>

          <div className="form-group">
                <label htmlFor="nomeProd">Imagem do Produto*</label>
                <input ref={ref => this.file = ref} id="file" type="file" className="form-control-file" onChange={this.handleUpload}/>
                <br/>
                <progress value={this.state.uploadValue} max="100" ></progress>
                <br/>
                <img height="100" src={this.state.picture} alt=""/>
          </div>

          <div className="form-group">
            <label htmlFor="tipo">Tipo de Produto*</label>
            <select ref={ref => this.tipo = ref} id="tipo" className="form-control">
              <option value="0">Nenhum</option>
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

          <div className="form-group">
            <label htmlFor="descricao">Descrição(Detalhe seu produto)*</label>
            <textarea  ref={ref => this.descricao = ref} maxlength="50" className="form-control" required="true" id="descricao" rows="3">Ex: tamanho, cor, tipo</textarea>
            
          </div>

          <div className="form-group">
            <label htmlFor="preco">Preço Final</label>
            <input type="number" ref={ref => this.preco = ref} step="0.01" className="form-control" id="preco" placeholder="Ex: R$: 35,00" />
          </div>

          <div className="form-group">
            <label htmlFor="validade">Data de termino*</label>
            <input type="date" ref={ref => this.validade = ref} required="true" className="form-control" id="validade" />
          </div>

          <br />

          <button type="submit" className="btn btn-primary btn-lg">Cadastrar Produto</button>

        </form>
      </div>
    )
  }
}
export default NovoProduto