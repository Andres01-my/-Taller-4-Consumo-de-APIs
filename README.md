# Taller 4 - Venta de Motos

## E-Commerce Web Application

---

## Autor

**Andres Esteban Mesa Yepes**

- **Institución:** SENA (Servicio Nacional de Aprendizaje)
- **Programa:** Desarrollo de Aplicaciones Web
- **Proyecto:** Taller 4 - E-Commerce
- **Tipo:** Trabajo Netamente Académico

---

## Descripción

Aplicación web de comercio electrónico para la gestión y venta de motos y accesorios. El proyecto implementa un sistema completo de autenticación, gestión de inventario, carrito de compras y favoritos, desarrollado como proyecto académico del programa de formación del SENA.

---

## Características Principales

- 🔐 Sistema de autenticación (registro, login, recuperación de contraseña)
- 🏍️ Catálogo de productos (motos y accesorios)
- 🛒 Carrito de compras funcional
- ❤️ Sistema de favoritos
- 📊 Gestión de gastos
- 🔗 Integración con API externa (Rick and Morty)
- 📱 Diseño responsivo con Material UI
- 📦 Progressive Web App (PWA) - Funcional offline

---

## Instalación

### Requisitos Previos

- Node.js (v18+)
- npm o yarn
- MongoDB (local o MongoDB Atlas)

### Pasos de Instalación

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

---

## Ejecución

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

La aplicación estará disponible en `http://localhost:5173`

### Producción

```bash
cd front
npm run build
```

El build se generará en la carpeta `dist/` lista para desplegar en Vercel.

---

## PWA - Progressive Web App

Esta aplicación incluye soporte completo para PWA, permitiendo:

- ✅ Instalación en dispositivos móviles y escritorio
- ✅ Funcionamiento offline (sin conexión a internet)
- ✅ Actualizaciones automáticas
- ✅ Experiencia similar a una aplicación nativa

### Archivos PWA

| Archivo | Descripción |
|---------|-------------|
| `public/manifest.json` | Configuración de la PWA |
| `public/service-worker.js` | Service Worker para cache offline |
| `public/icon-192.png` | Icono para instalación (192x192) |
| `public/icon-512.png` | Icono para instalación (512x512) |
| `src/registerServiceWorker.js` | Registro del Service Worker |

### Funcionalidades del Service Worker

- **Cache Offline:** Los recursos estáticos se almacenan en cache
- **Estrategia Cache-First:** Prioriza el cache, luego red
- **No cachea APIs:** Las peticiones a `/api` se ignoran
- **Actualización automática:** Notifica al usuario cuando hay nueva versión

### Cómo Instalar la PWA

**En Chrome/Edge:**
1. Visite la aplicación en el navegador
2. En la barra de direcciones aparecerá un ícono de instalación (⬇️)
3. O haga clic en "Instalar aplicación" en el menú del navegador

**En móvil (Android):**
1. Abra la aplicación en Chrome
2. Seleccione "Agregar a pantalla de inicio" en el menú

---

## Tecnologías

### Frontend
- **React 19** - Framework de interfaz de usuario
- **Vite** - Herramienta de build y desarrollo
- **Material UI** - Componentes de interfaz
- **React Router DOM** - Enrutamiento
- **Axios** - Cliente HTTP

### Backend
- **Express** - Framework de servidor
- **MongoDB** - Base de datos
- **Mongoose** - ODM para MongoDB
- **JWT** - Autenticación
- **Bcryptjs** - Encriptación de contraseñas

---

## Arquitectura del Proyecto

```
taller4_motos/
├── backend/
│   ├── controllers/      # Controladores de negocio
│   │   ├── authController.js
│   │   └── expenseController.js
│   ├── middleware/        # Middleware de autenticación
│   │   └── auth.js
│   ├── routes/           # Rutas de la API
│   │   ├── auth.js
│   │   └── expenses.js
│   ├── server.js         # Punto de entrada del servidor
│   └── package.json
│
└── front/
    ├── public/            # Archivos estáticos
    │   ├── manifest.json  # PWA Manifest
    │   ├── service-worker.js
    │   └── icon-*.png
    ├── src/
    │   ├── context/       # Contextos de React
    │   │   ├── AuthContext.jsx
    │   │   ├── CartContext.jsx
    │   │   └── FavoritesContext.jsx
    │   ├── features/      # Componentes por funcionalidad
    │   │   ├── api/
    │   │   ├── auth/
    │   │   ├── expenses/
    │   │   ├── layout/
    │   │   └── views/
    │   ├── shared/        # Estilos globales
    │   ├── App.jsx        # Componente principal
    │   ├── Routes.jsx     # Configuración de rutas
    │   └── main.jsx       # Punto de entrada
    └── package.json
```

---

## Datos del Autor

- **Nombre:** Andres Esteban Mesa Yepes
- **Institución:** SENA (Servicio Nacional de Aprendizaje)
- **Programa:** Desarrollo de Aplicaciones Web
- **Proyecto Académico:** Taller 4 - E-Commerce
- **Stack Tecnológico:** MERN Stack (MongoDB, Express, React, Node.js)
- **Tipo de Trabajo:** Netamente Académico

---

## Contribuciones

Este es un proyecto académico. Las contribuciones están limitadas a mejoras educativas y correcciones de bugs.

---

## Licencia

Este proyecto es trabajo académico del SENA. Todos los derechos reservados.
