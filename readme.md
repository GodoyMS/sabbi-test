# Sabbi test

Este proyecto es una API backend construida con TypeScript, Express y TypeORM usando PostgreSQL como base de datos. Expone endpoints REST documentados con Swagger.

---


## 🚀 Despliegue

La aplicación está desplegada en Railway:

🔗 **API en producción**: [https://sabbi-test-production.up.railway.app](https://sabbi-test-production.up.railway.app)

🔗 **Documentación OPEN API en producción**: [https://sabbi-test-production.up.railway.app/api-docs](https://sabbi-test-production.up.railway.app/api-docs)

La base de datos PostgreSQL también está alojada en Railway.

---

## Características

- Base de datos PostgreSQL con TypeORM como ORM
- Endpoints CRUD para gestionar `productos individuales` y `productos compuestos`
- Validación con express-validator
- Documentación de la API disponible en la ruta `/api-docs` (Swagger UI)
- Configuración mediante variables de entorno en archivo `.env`

---

## Variables de Entorno

Debes crear un archivo `.env` en la raíz del proyecto con las siguientes variables (ejemplo en `.env.example`):

```env
DB_HOST=
DB_PORT=
DB_USERNAME=
DB_PASSWORD=
DB_NAME=
PORT=
NODE_ENV= 

```

---
## Scripts disponibles

```npm run dev``` Ejecuta el servidor en modo desarrollo con recarga automática (ts-node-dev).

```npm run build```: Compila el código TypeScript a JavaScript en la carpeta dist.

```npm run start```: Ejecuta el servidor con ts-node (ideal para pruebas rápidas).

```npm run start:prod ```: Ejecuta el servidor compilado desde la carpeta dist (modo producción).


## Instalacion y ejecución

### Clona el repositorio:

```git clone https://github.com/GodoyMS/sabbi-test```

```cd sabbi-test```

### Instala las dependencias:
```npm install```

### Crea y configura tu archivo .env con las variables necesarias.

### Ejecuta el servidor en modo desarrollo:
```npm run dev```

### Abre tu navegador y visita http://localhost:3000/api-docs para ver la documentación de la API con Swagger.

---

## Base de datos
El proyecto utiliza PostgreSQL junto con TypeORM para modelar datos y manejar migraciones.

## Documentación API
http://localhost:3000/api-docs
