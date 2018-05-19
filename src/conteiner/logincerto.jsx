// // import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom'
// import {fire} from '../config/fire'
// import MinhaLoja from '../logado/MinhaLoja'

// class LoginTest extends Component {
//     constructor() {
//         super();
//         this.state = ({
//           user: null,
//           isLoggedIn: false
//         });
        
//       }
//       componentDidMount() {
//         fire.auth().onAuthStateChanged((user) => {
//           this.setState({
//             isLoggedIn: !!user,
//             user: user
//           })
//         })
//       }
//     render() {
//       if(!this.state.isLoggedIn) {
//         return <Redirect to='/login' />
//       }
//         return (
//                 <div>
//                 <MinhaLoja/>
//                 </div>
//         );
//     }
// }
// export default LoginTest;

