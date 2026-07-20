import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import ContactForm from './components/OrderForm'; 

function App() {
  return (
    <Router>
      <div className="bg-light min-vh-100">
        {/* Barra de Navegación / Menú Principal */}
        <nav className="navbar navbar-expand navbar-dark bg-dark mb-4 shadow">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Examen Componentes</span>
            <div className="navbar-nav">
              {/* Botones de selección de Ejercicios */}
              <Link to="/productos" className="btn btn-outline-light me-2">
                Ejercicio 1: Catálogo
              </Link>
              <Link to="/contacto" className="btn btn-outline-light">
                Ejercicio 2: Formulario
              </Link>
            </div>
          </div>
        </nav>

        {/* Contenedor Dinámico de Vistas */}
        <div className="container bg-white p-4 border rounded shadow-sm">
          <Switch>
            {/* Pantalla de inicio por defecto (Index) */}
            <Route exact path="/">
              <div className="text-center my-5">
                <h2>Bienvenido al Examen de Programación de Componentes</h2>
                <p className="text-muted">Selecciona un ejercicio en el menú superior para comenzar.</p>
              </div>
            </Route>

            {/* Ruta del Ejercicio 1 */}
            <Route path="/productos" component={ProductList} />

            {/* Ruta del Ejercicio 2 */}
            <Route path="/contacto" component={ContactForm} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;