import React, { Component } from 'react';
import {Link} from 'react-router';
import {fire} from '../config/fire';

class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
          email: '',
          password: ''
        };
      }
    
      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
    
      login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
            this.setState({
                error: true,
                isLogging: false
              })
          });
      }
    render() {
        return (
            <div>
                <div className="login">
                <br/>
                    <h3>Entre com seus Dados</h3>
                    <br/>
                    <form>
                        <div className="form-group">
                            <input value={this.state.email} onChange={this.handleChange} className="form-control" type="email" placeholder="Endereço de Email"  name="email" required></input>
                        </div>
                        <div className="form-group">
                            <input value={this.state.password} onChange={this.handleChange} className="form-control" placeholder="Senha" type="password" name="password" required></input>
                        </div>

                        {this.state.error && <p>Usuário e/ou senha inválido(s)!</p>}

                        <div className="botoes"><button type="submit" onClick={this.login} className="botao btn btn-primary">Logar</button></div>
                    </form>
                    <div className="botoes">
                    <Link to='/cadastrar' className="botao btn btn-secondary active">Cadastre sua empresa</Link>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;
