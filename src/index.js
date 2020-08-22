import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home';
import CadastroVideo from './Pages/Cadastro/Video'
import CadastroCategoria from './Pages/Cadastro/Categoria'
import VideoReproducer from './Pages/VideoReproducer'



const errorMessage = () => (<div>404 boladão </div>)


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/video" component={VideoReproducer} /> 
      <Route path='/cadastro/categoria' component={CadastroCategoria} />
      <Route path='/cadastro/video' component={CadastroVideo} />
      <Route path='/home' component={Home} exact />
      <Route path='/home' component={Home} exact />
      <Route path='/' component={Home} exact />
      <Route component={errorMessage}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
