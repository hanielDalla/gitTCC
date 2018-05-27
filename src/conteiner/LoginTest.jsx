import React, { Component } from 'react';
import {fire} from '../config/fire'
import MinhaLoja from '../logado/MinhaLoja'
import Login from './Login'

class LoginTest extends Component {
    constructor() {
        super();
        this.state = ({
          user: null,
        });
      }
      componentDidMount() {
        fire.auth().onAuthStateChanged((user) => {
          if (user) {
            this.setState({ user });
            console.log(user.uid);
          } else {
            this.setState({ user: null });
          }
        })
      } 
        
    render() {
        return (
                <div>
                {this.state.user ? ( <MinhaLoja/>) : (<Login />)}
                </div>
        );
    }
}
export default LoginTest;

