import React, { useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { db } from '../firebase'; // Subimos un nivel para encontrar firebase.js

function ContactForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); // Nuevo estado para el mensaje
  
  const [validator] = useState(new SimpleReactValidator({
    messages: { required: 'Este campo es obligatorio.' }
  }));

  const handleSubmit = (event) => {
    event.preventDefault(); // Previene que la página se recargue dinámicamente

    if (validator.allValid()) {
      // Guardar todos los campos del contacto en Firestore Database
      db.collection('contacts').add({
        username: username,
        email: email,
        message: message, // Guardamos el mensaje en la nube
        createdAt: new Date()
      })
      .then(() => {
        alert('Mensaje de contacto enviado con éxito a Firestore.');
        setUsername('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error al guardar en Firestore: ', error);
      });
    } else {
      validator.showMessages();
      setUsername(username); // Forzar re-renderizado
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded bg-white shadow-sm">
      <div className="form-group mb-3">
        <label>Nombre Completo:</label>
        <input 
          type="text" 
          className="form-control"
          value={username} 
          onChange={(e) => setUsername(e.target.value)}
          onBlur={() => validator.showMessageFor('username')}
        />
        <span className="text-danger">
          {validator.message('username', username, 'required|alpha_space')}
        </span>
      </div>

      <div className="form-group mb-3">
        <label>Correo Electrónico:</label>
        <input 
          type="email" 
          className="form-control"
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => validator.showMessageFor('email')}
        />
        <span className="text-danger">
          {validator.message('email', email, 'required|email')}
        </span>
      </div>

      {/* Nuevo input estructurado para el Mensaje */}
      <div className="form-group mb-3">
        <label>Mensaje:</label>
        <textarea 
          className="form-control"
          rows="4"
          value={message} 
          onChange={(e) => setMessage(e.target.value)}
          onBlur={() => validator.showMessageFor('message')}
        />
        <span className="text-danger">
          {validator.message('message', message, 'required|min:10')}
        </span>
      </div>

      <button type="submit" className="btn btn-primary w-100">Enviar Mensaje de Contacto</button>
    </form>
  );
}

export default ContactForm;