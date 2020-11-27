import React from 'react';
import { BrowserRouter , Switch, Route} from 'react-router-dom';
import { Redirect } from 'react-router';
 
import Buscar from "./componentes/Buscar";
import Cadastrar from "./componentes/Cadastrar";
import Deletar from "./componentes/Deletar";
import Logar from "./componentes/Logar";
import Atualizar from "./componentes/Atualizar"


function App () {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/Buscar" />
          </Route>
          <Route exact path="/Buscar" component={Buscar} />
          <Route exact path="/Cadastrar" component={Cadastrar} />
          <Route exact path="/Deletar/:del" component={Deletar} />
          <Route exact path="/Logar" component={Logar} />
          <Route exact path="/Atualizar/:valor" component={Atualizar} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
