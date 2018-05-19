import React from 'react'

const CardLoja = (props) => {

  return (
    <div className="col-12 col-sm-4" style={{ paddingTop: '7px' }}>
      <div className="card row">
      <img className="card-img-top rounded mx-auto d-block imagemLoja2" src="" alt="Foto loja" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.endereco}</p>
          <a href="" className="btn btn-primary edit" onClick={props.action}>Mais detalhes</a>
        </div>
      </div>
    </div>
  )
}

export default CardLoja;
