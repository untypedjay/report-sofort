import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Newest from './pages/Newest';
import Report from './pages/Report';
import Nearby from './pages/Nearby';
import Municipalities from './pages/Municipalities';
import NotFound from './pages/NotFound';
import Municipality from './pages/Municipality';

export default function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Newest}/>
        <Route exact path="/reports/:reportId" component={Report}/>
        <Route exact path="/nearby" component={Nearby}/>
        <Route exact path="/locations" component={Municipalities}/>
        <Route exact path="/locations/:locationId" component={Municipality}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}