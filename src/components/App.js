//import './App.css';
import { ItemListContainer } from './ItemListContainer';
import { Navbar } from './NavBar/Navbar';

function App() {
  return (
    <div className="h-screen"> 
      <Navbar />
      <ItemListContainer visita="Ernesto" />
    </div>
  );
}

export default App;
