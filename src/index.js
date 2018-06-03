import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Lojas from './conteiner/Lojas';
import Loja from './ui/Loja'
import App from './App';
import Login from './conteiner/Login'
import Cadastrar from './conteiner/Cadastrar';
import Home from './conteiner/Home';
import Outros from './conteiner/Outros'
import LoginTest from './conteiner/LoginTest'
import MinhaLoja from './logado/MinhaLoja'
import NovoProduto from './logado/NovoProduto'
import SobreNos from './conteiner/SobreNos'
import Denuncie from './conteiner/Denuncie'
import Futuro from './conteiner/Futuro'
import registerServiceWorker from './registerServiceWorker';
import PageNotFound from './ui/PageNotFound'
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

ReactDOM.render(
<Router history={hashHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path='/login' component={Login} />
        <Route path='/outros' component={Outros}/>
        <Route path='/sobrenos' component={SobreNos}/>
        <Route path='/futuro' component={Futuro}/>
        <Route path='/denuncie' component={Denuncie}/>
        <Route path='/logintest' component={LoginTest} />
        <Route path='/cadastrar' component={Cadastrar} />
        <Route path='/lojas' component={Lojas} />
        <Route path='/loja' component={Loja} />
        <Route path='/novoproduto' component={NovoProduto}/>
        <Route path='/minhaLoja' component={MinhaLoja}/>
        <Route component={ PageNotFound } />
    </Route>
</Router>

,
 document.getElementById('root'));
registerServiceWorker();
