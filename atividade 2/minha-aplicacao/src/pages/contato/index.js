import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contato = () => {
    const navigate = useNavigate()
  return (
    <div>
      <h2>Página de Contato</h2>
      <button onClick={() => navigate('/')}>
         Home
      </button>
      <button onClick={() => navigate('/sobre')}>
          Sobre
      </button>

    </div>  
    )
}

export default Contato