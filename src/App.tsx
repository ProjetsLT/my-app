import './App.css';
import { Home } from './screens/Home';
import { Ressources } from './screens/Ressources';
import { Contact } from './screens/Contact';
import { Routes, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className='h-screen flex flex-col'>
      <header className='bg-gray-200 p-4 flex justify-between items-center'>
        <img className='w-10 h-10' src="/images/logo.png" alt="Logo"/>
        <nav className='flex justify-center space-x-4'>
          <NavLink className='text-blue-500 hover:underline' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to='/'>
            Accueil
          </NavLink>
          <NavLink className='text-blue-500 hover:underline' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to='/ressources'>
            Ressources
          </NavLink>
          <NavLink className='text-blue-500 hover:underline' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to='/contact'>
            Contact
          </NavLink>
        </nav>
      </header>
      <main className='flex-grow flex items-center justify-center'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ressources' element={<Ressources />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;