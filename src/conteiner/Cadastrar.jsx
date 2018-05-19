import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Cadastrar extends Component {
  render(){
        return (
          <div>
            <h2>Se você é uma loja interessada em nosso negocio,
              envie um email para: novapp@gmail.com e crie já sua conta</h2>
            <div className="botoes"><Link to="/logintest" className=" btn btn-secondary active botao">Voltar</Link></div>  
            
        </div>
        );
    }
}