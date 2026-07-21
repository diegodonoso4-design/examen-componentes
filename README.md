# Examen: Programación de Componentes

Este proyecto corresponde a la evaluación final de la asignatura **Programación de Componentes**. Consiste en una aplicación web desarrollada en React integrada con servicios en la nube de Firebase, estilizada de forma responsiva con Bootstrap y preparada para su empaquetado y distribución en plataformas móviles Android.

---

## 🛠️ Tecnologías Utilizadas

- **Frontend:** React.js (Vite / JSX)
- **UI & Estilos:** Bootstrap 5 & React-Bootstrap
- **Navegación / Enrutamiento:** React Router Dom (v5)
- **Validaciones:** Simple React Validator
- **Backend & Cloud:** Firebase (Firestore Database)
- **Entorno Móvil:** Cordova, Android Studio, Gradle (Generación de APK)
- **Firmado y Optimización:** Keytool, Jarsigner & Zipalign

---

## 📋 Estructura y Contenidos Desarrollados

### Ejercicio 1: Componentes y Manejo de Estado
- Componente de clase para el catálogo y carrito de compras (`ProductList.jsx`) utilizando `this.state` y `this.setState`.
- Componente funcional hijo (`ProductItem.jsx`) para la renderización de elementos individuales.
- Comunicación bidireccional (Padre a Hijo mediante `props` e Hijo a Padre mediante funciones `callback`).
- Renderizado dinámico de arreglos mediante el método `map()` e identificadores `key` únicos.

### Ejercicio 2: Formulario Controlado y Persistencia Cloud
- Componente de formulario de contacto (`OrderForm.jsx`) con estados locales controlados.
- Validación de campos en tiempo real (nombre, correo electrónico y mensaje) con `react-simple-validator`.
- Integración con **Firestore Database** de Firebase para la persistencia de datos en la nube.

### Ejercicio 3: Interfaz Responsiva y Empaquetado Móvil
- Diseño adaptable e intuitivo empaquetado en rutas (`/productos` y `/contacto`).
- Uso de `React.Fragment` para mantener la limpieza y optimización del DOM.
- Proceso de compilación estática (`npm run build`) y empaquetado móvil mediante **Cordova**.
- Generación, firmado digital (`keytool`, `jarsigner`) y alineación de memoria (`zipalign`) para la creación del ejecutable APK.

---

## 🚀 Instrucciones de Ejecución Local

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/diegodonoso4-design/examen-componentes.git](https://github.com/diegodonoso4-design/examen-componentes.git)
   cd examen-componentes

---

## 📱 Empaquetado Móvil y Firma Digital (Cordova)

1. Transfiera el contenido de la carpeta `dist/` a la carpeta `www/` del contenedor Cordova.
2. Compilación del proyecto:
   ```bash
   cordova build android --release

3. Firmar la app usando las herramientas de Java keytool y jarsigner.
