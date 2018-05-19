import React, { Component } from 'react'
import propsimgLoja from '../arquivos/imagens/imgLoja3.png'
import propsimgProd from '../arquivos/imagens/imgProd5.jpeg'
import {Link} from 'react-router'

class Produto extends Component {
    render(props) {
        return (
            <div className="card">
            <div className="card-body">
                <div className="row ">
                <img className="imagemLoja" src={propsimgLoja} alt="Imagem do Produto"/>
                    <Link className="trataLink card-title" to="/loja" >"props.loja"</Link> 
                </div>
            </div>
            <img className="card-img-bottom imagemProd" style={{height: '1fw',  width: '1fw'}} src={propsimgProd} alt="Imagem do Produto"/>
            <div className="card-body">
                <h4 className="card-title">"props.title"</h4>
                <h5 className="card-text decricao">"props.text"</h5>
                <p className="card-text ">Preço: "props.preço"</p>
                <p className="card-text"><small className="text-muted">Valido até: "props.validade"</small></p>
            </div>
            </div>
        )
    }
}

export default Produto