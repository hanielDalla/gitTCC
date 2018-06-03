import React from 'react'

const CardLoja = (props) => {

  return (
    <div className="col-12 col-sm-4" style={{ paddingTop: '7px' }}>
      <div key={props.key} className="card row">
      <img className="card-img-top rounded mx-auto d-block imagemLoja2" src={props.imgLoja} alt="Foto loja" />
        <div className="card-body">
          <h4 className="card-title">{props.nome}</h4>
          <h5 className="card-title">{props.email}</h5>
          <p className="card-text">{props.endereco}</p>
          <a href="" className="btn btn-primary edit" onClick={props.action}>Mais detalhes</a>
        </div>
      </div>
    </div>
  )
}

export default CardLoja;
