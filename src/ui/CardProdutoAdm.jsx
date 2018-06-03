import React from 'react';
import { Link } from 'react-router';

const CardProdutoADM = (props) => (
    <div className="col-12 col-sm-4">
        <div className="card">
            <div className="admPart">
                <h4>Parte administrativa</h4>
                <button disabled="disabled">Excluir</button>
                <button disabled="disabled">Editar</button>
                <p>Produto ativo <input type="checkbox" checked={props.ativacao}/></p>
            </div>
            <div className="card-body">
                <img className="imagemLoja" src={props.imgLoja} alt="Imagem da Loja" />
                <Link className="trataLink card-title" to="/loja" >{props.nomeLoja}</Link>
            </div>
            <img className="card-img-bottom" style={{ height: '250px', width: '1fr' }} src={props.imgProd} alt="Imagem do Produto" />
            <div className="card-body">
                <h5 className="card-title" style={{ fontWeight: 'bold' }}>{props.nome}</h5>
                {/* <h5 className="tipo">{props.tipo}</h5> */}
                <p className="card-text verde">Por apenas: R$:{props.preco}</p>
                <p className="card-text"><small className="text-muted">Valido até: {props.validade}</small></p>
                <p>Descricão: </p>
                <p>{props.descricao}</p>

            </div>
        </div>
    </div>
)


export default CardProdutoADM;