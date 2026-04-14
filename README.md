# Taller 4 - E-Commerce Application

## Autor

**Andres Mesa**

## Descripcion

Aplicacion web de comercio electronico para la gestion y venta de motos y accesorios. El proyecto implementa un sistema completo de autenticacion, gestion de inventario, carrito de compras y favoritos.

## Caracteristicas Principales

- Registro e inicio de sesion de usuarios
- Catalogo de productos (motos y accesorios)
- Carrito de compras funcional
- Sistema de favoritos
- Gestion de gastos/gastos
- Integracion con API externa (Rick and Morty)
- Diseño responsivo con Material UI

## Instalacion

### Requisitos Previos

- Node.js (v18+)
- MongoDB (local o Atlas)

### Pasos de Instalacion

1. Clonar el repositorio
2. Instalar dependencias del backend:
   ```bash
   cd backend
   npm install
   ```
3. Instalar dependencias del frontend:
   ```bash
   cd front
   npm install
   ```

## Ejecucion

### Backend

```bash
cd backend
npm run dev
```

El servidor correra en `http://localhost:5000`

### Frontend

```bash
cd front
npm run dev
```

La aplicacion estara disponible en `http://localhost:5173`

## Tecnologias

### Frontend
- **React 19** - Framework de interfaz de usuario
- **Vite** - Herramienta de build
- **Material UI** - Componentes de interfaz
- **React Router DOM** - Enrutamiento
- **Axios** - Cliente HTTP

### Backend
- **Express** - Framework de servidor
- **MongoDB** - Base de datos
- **Mongoose** - ODM para MongoDB
- **JWT** - Autenticacion
- **Bcryptjs** - Encriptacion de contrasenas

## Arquitectura

```
taller4_motos/
├── backend/
│   ├── controllers/      # Controladores de negocio
│   │   ├── authController.js
│   │   └── expenseController.js
│   ├── middleware/        # Middleware de autenticacion
│   │   └── auth.js
│   ├── routes/           # Rutas de la API
│   │   ├── auth.js
│   │   └── expenses.js
│   ├── server.js         # Punto de entrada del servidor
│   └── package.json
│
└── front/
    ├── src/
    │   ├── context/      # Contextos de React (Auth, Cart, Favorites)
    │   ├── features/     # Componentes por funcionalidad
    │   │   ├── api/
    │   │   ├── auth/
    │   │   ├── expenses/
    │   │   ├── layout/
    │   │   └── views/
    │   ├── shared/        # Estilos globales
    │   ├── App.jsx        # Componente principal
    │   ├── Routes.jsx     # Configuracion de rutas
    │   └── main.jsx       # Punto de entrada
    ├── index.html
    └── package.json
```

## Screenshot

*(Agregar captura de pantalla de la interfaz grafica)*

## Datos Importantes del Autor

- **Nombre:** Andres Mesa
- **Institucion:** Sena
- **Proyecto:** Taller 4 - Desarrollo de Aplicaciones 
- **Tecnologias:** MERN Stack (MongoDB, Express, React, Node.js)