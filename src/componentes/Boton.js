import React from 'react';
import '../hojas-de-estilo/Boton.css'

function Boton({ texto, esBotonDeCic, manejarClic }) {
  return(
    <button
    className={esBotonDeCic ? 'boton-clic' : 'boton-reiniciar'}
    onClick={manejarClic}>
      {texto}
    </button>
  )
}

export default Boton; 