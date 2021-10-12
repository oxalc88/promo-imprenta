import { reset } from 'react-style-reset';
//import './App.css';
import { Navbar } from './Navbar';

function App({children}) {
  return (
    <div className="h-screen"> 
      <Navbar />,
      {children}
    </div>
  );
}

export default App;
