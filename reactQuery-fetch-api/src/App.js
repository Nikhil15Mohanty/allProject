import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Contact } from './pages/Contact';
import {Navbar} from './Navbar.js';
import {QueryClient,QueryClientProvider} from '@tanstack/react-query';
function App() {
  // react-query is use to fetch data and it is used in the top component of the page 
  const client = new QueryClient({
    defaultOptions:{
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <div className="App">
      <QueryClientProvider client = {client}>
     <Router>
        <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path = '*' element={<h1>404 Page not found</h1>}/>
      </Routes>
     </Router>
     </QueryClientProvider>
    </div>
  );
}

export default App;
