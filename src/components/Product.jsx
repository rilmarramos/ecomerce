import React, { useState } from 'react'

const Product = ({ product, addToCart }) => {

  const [cantidad, setCantidad] = useState(1)
   const [stock, setStock] = useState(5)

  const increase = () => setCantidad(prev => (prev != product.stock ? prev + 1: prev));
  const decrease = () => setCantidad(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <section className="product">
      <div className="fondoProducto">
      </div>
      <img src={product.img} alt={product.name} className="imagenCompus" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">${product.precio}</p>
      <p style={{color:'#9b9b9b'}}>Stock: {stock}</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
        <button
          onClick={decrease}
          style={{
            backgroundColor: '#e0e0e0',
            border: 'none',
            padding: '4px 8px',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          -
        </button>
        <span>{cantidad}</span>
        <button
          onClick={increase}
          style={{
            backgroundColor: '#e0e0e0',
            border: 'none',
            padding: '4px 8px',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          +
        </button>
      </div>



      <button
        onClick={() => addToCart({...product, cantidad:cantidad})}
      >
        Agregar
      </button>
    </section>
  )
}

export default Product;
