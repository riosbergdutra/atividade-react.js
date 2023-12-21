import React from 'react'
import { useNavigate } from 'react-router-dom'

const Sobre = () => {
    const navigate = useNavigate()
  return (
    <div>
    <h2>Página Sobre</h2>
    <button onClick={() => navigate('/')}>
        Home
    </button>
    <button onClick={() => navigate('/contato')}>
        Contato
    </button>
  </div>
  )
}

export default Sobre