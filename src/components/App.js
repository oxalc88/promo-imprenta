//import './App.css';
import { ItemListContainer } from './ItemListContainer';
import { Routes } from './routes/Routes';
import { Route } from 'react-router-dom';
import { ItemDetailContainer } from './products/StoreItems/ItemDetailContainer';

function App() {
  return (
    <Routes> 
      <Route exact path="/" component={ItemListContainer("Ernesto")} />
      <Route path="/item/:id" component={ItemDetailContainer}/>
    </Routes>
  );
}

export default App;
