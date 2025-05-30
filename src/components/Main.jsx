import React from 'react'

const Main = ({data}) => {
  // console.log(data);
  
  let estilos = {color: "white", }

  return (
    <main className='main'>
        <h2 style={estilos}>Oferta Semanal</h2>
       <p>Aprovecha las siguientes ofertas con descuentos únicos.</p>
    </main>
  )
}

export default Main
