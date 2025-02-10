# MERN Instagram Clone

Este proyecto es un clon de Instagram desarrollado con el stack MERN (MongoDB, Express, React y Node.js), que incorpora Socket.io para mensajes y notificaciones en tiempo real y utiliza Cloudinary para el manejo de imágenes. Es una demostración práctica de cómo combinar tecnologías modernas para crear una aplicación full-stack con funcionalidades de red social, centrada en el aprendizaje y la mejora continua.

![💿](https://github.com/user-attachments/assets/2bfa530b-e9b1-496a-9c95-2bcf37c38adf)


## Características Principales

### Autenticación y Gestión de Usuarios
Registro, inicio de sesión y verificación de usuarios utilizando JSON Web Tokens (JWT).

### Gestión de Publicaciones
Creación, edición y eliminación de posts, con soporte para la subida y optimización de imágenes.

### Mensajería y Notificaciones en Tiempo Real
Implementadas mediante Socket.io para ofrecer una experiencia interactiva.

### Enfoque en Aprendizaje y Experimentación
Proyecto de investigación para desarrollar apps similares a las conocidas, con atención al manejo de errores y mejoras a futuro.

## Tecnologías Utilizadas

### Frontend
- React
- React Router
- (Opcional) Redux para la gestión global del estado

### Backend
- Node.js
- Express.js
- MongoDB

### Comunicación en Tiempo Real
- Socket.io

### Autenticación
- JSON Web Tokens (JWT)

### Manejo de Imágenes
- Cloudinary

----
## Guia de instalación.
Crear un archivo .env en la carpeta raíz  junto a las carpetas de backend y frontend que tendremos descargadas:
PORT=8000
MONGO_URI=mongodb+srv://tu-correo..............:appName=Cluster0
SECRET_KEY=tuClaveGeneradaAqui1234!
API_KEY=
API_SECRET=
CLOUD_NAME= tu codigo de cloudinary 

`Hacemos "npm install" tanto en el frontend como backend para instalar las dependencias`
`Ahora npm run dev` y podremos entrar a localhost://tu_puerto
----






