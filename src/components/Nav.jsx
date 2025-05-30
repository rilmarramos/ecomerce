import React from 'react'
import './style/Estilos.css'
import Cart from './Cart'
import carritoDeCompras from '../assets/carritoDeCompras.png'

const Nav = ({vaciarCarrito, cartCount,cartItems, isCartOpen, setCartOpen,borrarProducto }) => {

  return (
    <nav style={{ backgroundColor: '#333', color: "white", padding: "1px",}}>
      <ul>
      
        <li><a href='#'>Inicio</a></li>
        <li><a href='#'>Perifericos</a></li>
        <li> <a href='#'>Computadoras</a></li>
        <li> <a href='#'>Notebooks</a></li>
        <li> <a href='#'>Contacto</a></li>
        <li className='cartNav'>
          <button className='btnCart' onClick={() => setCartOpen(true)}> <img src={carritoDeCompras} alt="carrito" style={{width:25 , height: 25, filter: 'invert(100%)' }}/></button>
          <Cart vaciarCarrito={vaciarCarrito} cartItems={cartItems} isOpen={isCartOpen} onClose={() => setCartOpen(false)} borrarProducto={borrarProducto} />
        </li>
      </ul>
    </nav>
  )
}


export default Nav