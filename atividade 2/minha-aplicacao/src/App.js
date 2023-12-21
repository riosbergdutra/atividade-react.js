import './App.css';
import Contato from './pages/contato';
import Sobre from './pages/sobre';
import Home from './pages/home';
import { Route, Routes } from 'react-router-dom';
import Erro404 from './pages/erro404';

function App() {
  return (
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sobre" element={<Sobre />} />
    <Route path="/contato" element={<Contato />}/>
    <Route path="/*" element={<Erro404 />}/>
    </Routes>
   
  );
}

export default App;
