import React, { Component } from 'react'


class Loja extends Component {
    render() {
        return (
            <div>
                <div className="row media">
                    <div className="col">
                        <img className="imgLoja2-0 align-self-center mr-3" src="" alt="Imagem da loja" />
                    </div>

                    <div className="col-7">
                        <h1 className="card-title">"props.title"</h1>
                        <h5 className="card-text">"props.endereco"</h5>
                        <h5>Quantidades de produtos</h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default Loja