//import './App.css';
import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { NotFound } from '../pages/NotFound';
import { Home } from '../pages/Home';
import ProductDetail from '../containers/ProductDetail';
import Layout from '../containers/Layout';
import CategoryCatalog from '../components/products/Categories/CategoryCatalog';
import Cart from '../pages/Cart';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/category/:categoryId" component={CategoryCatalog} />
          <Route path="/item/:id" component={ProductDetail} />
          <Route path="/cart" component={Cart} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
