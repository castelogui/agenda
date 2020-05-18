import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Agenda from './pages/Agenda';
import NewContato from './pages/NewContato';
import Contato from './pages/Contato';

export default function Routes(){
   return (
      <BrowserRouter>
         <Switch>
            <Route path="/" exact component={Agenda} />
            <Route path="/new" component={NewContato} />
            <Route path="/contato/:id" component={Contato} />
         </Switch>
      </BrowserRouter>
   );
}