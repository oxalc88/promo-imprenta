//import './App.css';
import { ItemListContainer } from './ItemListContainer';
import { Navbar } from './NavBar/Navbar';
import { Routes } from './routes/Routes';

function App() {
  return (
    <div className="h-screen"> 
      <Navbar />
      <ItemListContainer visita="Ernesto" />
    </div>
  );
}
// https://reactrouter.com/web/guides/quick-start
export default App;
