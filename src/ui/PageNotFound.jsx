import React, { Component } from 'react'
import { Link } from 'react-router';

export default class PageNotFound extends Component {

  render() {
    return(
      <div>
        <h1> Erro 404!, Pagina não encontrada por favor confira o caminho inserido!</h1>
        <Link to="/" className="btn btn-primary edit">Pagina Principal</Link>
      </div>
    )
  }
}