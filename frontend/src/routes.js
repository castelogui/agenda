import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import NovoContato from './pages/NewTask';

export default function Routes(){
   return (
      <BrowserRouter>
         <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/new" component={NovoContato} />
         </Switch>
      </BrowserRouter>
   );
}