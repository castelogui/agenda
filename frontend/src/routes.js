import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Agenda from './pages/Agenda';
import NovoContato from './pages/NovoContato';

export default function Routes(){
   return (
      <BrowserRouter>
         <Switch>
            <Route path="/" exact component={Agenda} />
            <Route path="/new" component={NovoContato} />
         </Switch>
      </BrowserRouter>
   );
}