import React, { Component } from 'react'

class Denuncie extends Component {
    render() {
        return (
            <div className="container">
                <form >

                    <div className="col-sm-10">
                        <label style={{ fontWeight: 'bold' }} htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Email" />
                    </div>
                    <br />

                    <div className="col-sm-10">
                        <label style={{ fontWeight: 'bold' }}>NovApp</label>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="bugs" />
                            <label className="form-check-label" htmlFor="bugs">Erros no sistema.</label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="lentidao" />
                            <label className="form-check-label" htmlFor="lentidao">Lentidão na aplicação.</label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="outro" />
                            <label className="form-check-label" htmlFor="outro">Outro(comente sobre)</label>
                        </div>

                        <br />

                        <label style={{ fontWeight: 'bold' }}>Lojas</label>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="falsas" />
                            <label className="form-check-label" htmlFor="falsas">Promoções falsas.</label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="preco" />
                            <label className="form-check-label" htmlFor="precos">Preço incorreto</label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="outros" />
                            <label className="form-check-label" htmlFor="outros">Outro(comente sobre)</label>
                        </div>
                        <br />

                        <div className="form-group">
                            <label style={{ fontWeight: 'bold' }} htmlFor="sugestoes">Sugestões</label>
                            <textarea className="form-control" id="sugestoes" rows="3"></textarea>
                        </div>

                        <br />
 
                        <button type="submit" className="btn btn-secondary" id="botao">Enviar Denuncia</button>

                    </div>

                </form>

            </div>
        );
    }
}

export default Denuncie