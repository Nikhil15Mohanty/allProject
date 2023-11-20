import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';
import {Navbar} from './Navbar.js';
function App() {
  return (
    <div className="App">
     <Router>
        <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu />}/>
        <Route path='/contact/:username' element={<Contact />}/>
        <Route path = '*' element={<h1>404 Page not found</h1>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
