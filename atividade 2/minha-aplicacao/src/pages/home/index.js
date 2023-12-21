import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  return (
    <div>
    <h2>Página Inicial</h2>
    <button onClick={() => navigate('/contato')}>
        Contato
    </button>
    <button onClick={() => navigate('/sobre')}>
        Sobre
    </button>

  </div>
  )
}

export default Home