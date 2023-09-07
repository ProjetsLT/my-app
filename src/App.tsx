import './App.css';
import { Home } from './screens/Home';
import { Ressources } from './screens/Ressources';
import { Routes, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <div>

      <nav>
        <NavLink to='/'>Accueil</NavLink>
        <br />
        <NavLink to='/ressources'>Ressources</NavLink>
      </nav>

      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/ressources' element={ <Ressources/> }/>
      </Routes>
    </div>
  );
}

export default App;
