//import './App.css';
import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { ItemDetailContainer } from '../components/products/StoreItems/ItemDetailContainer';
import { NotFound } from '../pages/NotFound';
import { Home } from '../pages/Home';
import { Navbar } from '../components/NavBar/Navbar'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/item/:id" component={ItemDetailContainer} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
