import React from 'react';
import {Link} from 'react-router';
//import teste from '../'

const CardProduto = (props) =>{

    return(
        <div className="col-12 col-sm-4">
            <div className="card">
            <div className="card-body">
                <img className="imagemLoja" src={props.imgLoja} alt="Imagem do Produto"/>
                    <Link className="trataLink card-title" to="/loja" >{props.loja}</Link> 

            </div>
            <img className="card-img-bottom" style={{height: '250px',  width: '1fr'}} src={props.imgProduto} alt="Imagem do Produto"/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.preco}</p>
                <p className="card-text"><small className="text-muted">Valido até: {props.validade}</small></p>
                <button className="btn btn-primary"  onClick={props.action}>Ver Promoção</button>
            </div>
            </div>
        </div>
  )
}

export default CardProduto;