import React, { Component } from 'react'
import NovaApp from '../arquivos/imagens/NovApp.jpg'

class SobreNos extends Component{
    render(){
        return(
            <div className="imgplace">
            <img className="logo" src={NovaApp} alt="Imagem do Produto"/>

          <dl className="row">
            
            <dt className="col-sm-12" style={{ textAlign: 'center' }}>Desenvolvedores: </dt>
            <br/>
            
            <div className="col-sm-6">
            <br/>
                <dt>Guilherme Zaqui Rodrigues</dt>
                <div>Estudante</div>
                <div>Instituto Federal do Mato Grosso do Sul</div>
                <div>guilherme.rodrigues@novaandradina.org</div>
                <div>(67)99938-9326</div>
            </div>
            
            <div className="col-sm-6">
            <br/>
                <dt>Haniel Plinio Dalla Vecchia</dt>
                <div>Estudante</div>
                <div>Instituto Federal do Mato Grosso do Sul</div>
                <div>haniel.vecchia@novaandradina.org</div>
                <div>(67)99941-2694</div>
                <br/>
            </div>

            <dt className="col-sm-12" style={{ textAlign: 'center' }}>V.1.0.0</dt>
            </dl>

        </div>
        )
    }

}

export default SobreNos