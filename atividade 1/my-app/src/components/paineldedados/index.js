import React from 'react'
 
const PaineldeDados = ({texto, children}) => {
  return (
    <div className="PaineldeDados">
    <h2>{texto}</h2>
    <div>{children}</div>
  </div>
  )
}

export default PaineldeDados