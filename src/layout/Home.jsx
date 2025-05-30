import React,{useEffect,useState} from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Main from '../components/Main'
import { productsList } from '../utils/data'
import ProductList from '../components/ProductList'
import Cart from '../components/Cart'


const Home = ({cart,handleAddToCart, isCartOpen,setCartOpen,borrarProducto, vaciarCarrito }) => {

  const [productos,setProductos] = useState([])
  const [carga, setCarga] = useState(true)
  const [error, setError] = useState(false)

    const cartCount = cart.length

  
   
  return (
    <>
      <Header/>
      <Nav cartItems={cart} vaciarCarrito={vaciarCarrito} cartCount={cartCount} isCartOpen={isCartOpen} setCartOpen={setCartOpen} borrarProducto={borrarProducto}/>
      <Main />
      <ProductList products={productsList} addToCart={handleAddToCart}/>
      <Cart cartItems={cart}/>
      <Footer/>
    </>
  )
}

export default Home
