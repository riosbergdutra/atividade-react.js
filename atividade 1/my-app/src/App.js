import './App.css';
import PaineldeDados from './components/paineldedados';
import VisualizadordeDados from './components/visualizadordedados';
import { useState } from 'react';

const App = () => {
  const [estado, setEstado] = useState('Dados do Estado');

  return (
    <div className="app">
      <h1>passando dados entre components</h1>
      
      <PaineldeDados texto="Componente">
        <VisualizadordeDados valor={estado} />
      </PaineldeDados>

      <button onClick={() => setEstado('Novos Dados do Estado')}>
        Alterar Estado
      </button>
    </div>
  );
};

export default App;