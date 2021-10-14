//import './App.css';
import { Navbar } from './Navbar';
import { ItemListContainer } from './ItemListContainer';

function App() {
  return (
    <div className="h-screen"> 
      <Navbar />
      <ItemListContainer visita="Ernesto" />
    </div>
  );
}

export default App;
