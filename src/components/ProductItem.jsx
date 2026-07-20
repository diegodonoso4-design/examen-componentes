import React from 'react';

function ProductItem(props) {
  const handleClick = () => {
    // Hijo a Padre: Llama a la función callback enviada por el padre pasando el producto
    props.onAddToCart(props.producto);
  };

  return (
    <div className="card m-2 p-3" style={{ width: '18rem' }}>
      {/* Padre a Hijo: Recibe y muestra las propiedades del producto */}
      <h5>{props.producto.name}</h5>
      <p>Precio: ${props.producto.price}</p>
      <button className="btn btn-primary" onClick={handleClick}>
        Agregar al Carrito
      </button>
    </div>
  );
}

export default ProductItem;