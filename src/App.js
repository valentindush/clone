
import './App.css';
import Login from './pages/login';
import Chat from './pages/Chat';
import Sign from './pages/Sign'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Chat />} />
        <Route path='/login' element={< Login />} />
        <Route path='/signup' element={<Sign />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
