import React from 'react';
import ProductItem from './ProductItem';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    // Inicialización del estado interno mutable
    this.state = {
      products: [
        { id: 1, name: 'Notebook Gamer', price: 1200000 },
        { id: 2, name: 'Mouse Ergonómico', price: 45000 },
        { id: 3, name: 'Teclado Mecánico', price: 90000 },
      ],
      cart: []
    };
    // Vinculación explícita de this para asegurar el contexto correcto en el callback
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleAddToCart(product) {
    // Actualiza el estado reactivamente usando setState
    this.setState(prevState => ({
      cart: [...prevState.cart, product]
    }));
  }

  render() {
    return (
      <div className="container mt-4">
        <h2>Catálogo de Productos</h2>
        <div className="d-flex flex-wrap">
          {/* List Rendering utilizando map() e identificador key único */}
          {this.state.products.map(product => (
            <ProductItem 
              key={product.id.toString()} 
              producto={product} 
              onAddToCart={this.handleAddToCart} 
            />
          ))}
        </div>
        
        <div className="mt-4 p-3 bg-light border rounded">
          <h4>Carrito de Compras ({this.state.cart.length} ítems)</h4>
          <ul>
            {this.state.cart.map((item, index) => (
              <li key={index}>{item.name} - ${item.price}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ProductList;