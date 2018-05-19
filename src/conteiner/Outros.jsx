import React, { Component } from 'react'
import { Link } from 'react-router';
import NovaApp from '../arquivos/imagens/NovApp.jpg'

class Outros extends Component{
    render(){
        return(
            <div>
                <div className="imgplace">
                    <img className="logo" src={NovaApp} alt="Imagem do Produto"/>
                    <Link to='/denuncie' className="btn btn-secondary edit botao" style={{marginTop: '15px'}}>Denuncie</Link>
                    <Link to='/sobrenos' className="btn btn-secondary edit botao" style={{marginTop: '15px'}}>Sobre Nós</Link>
                    <Link to='/futuro' className="btn btn-secondary edit botao" style={{marginTop: '15px'}}>Implementações Futuras</Link>
                </div>
            </div>
        );
    }
}

export default Outros