import React from 'react'
import { useNavigate } from 'react-router-dom'

const Erro404 = () => {
    const navigate = useNavigate()

  return (
    <div>
    <h2>Erro 404 - Página não encontrada</h2>
    <button onClick={() => navigate('/')}>Voltar para Home</button>
  </div>
  )
}

export default Erro404