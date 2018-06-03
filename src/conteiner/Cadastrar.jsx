import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Cadastrar extends Component {
  render(){
        return (
          <div className="center-center">
            <br/>
            <h2 className="center">Se você é uma loja interessada em expandir o seu negocio</h2>
            <br/>
            <div className="botoes"><a href="https://goo.gl/forms/cAeafPINyMorN44v2" className="btn btn-primary active botao">Clique aqui</a></div>
            <div className="botoes"><Link to="/logintest" className=" btn btn-secondary active botao">Voltar</Link></div>  
            
        </div>
        );
    }
}