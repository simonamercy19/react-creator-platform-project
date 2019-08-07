import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '../src/static/styles/style.scss';
import Header from './components/Header';
import ExpoloreCreator from './components/containers/ExporeCreator';
import CreatorProfile from './components/containers/CreatorProfile';
import ControlPanel from './components/containers/ControlPanel';


function App() {
  return (
      <BrowserRouter>
        <Header />
        <Route exact= {true} path= "/" component= {ExpoloreCreator} />
        <Route exact= {true} path= "/CreatorProfile" component= {CreatorProfile} />
        <Route exact={true} path="/ControlPanel" component={ControlPanel} />
      </BrowserRouter>
    
  );
}

export default App;