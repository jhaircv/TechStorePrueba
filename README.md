# Backend PostgreSQL App

Este proyecto es una aplicación backend construida con Node.js y Express que se conecta a una base de datos PostgreSQL. A continuación se detallan las instrucciones para configurar y ejecutar la aplicación.

## Requisitos

- Node.js (v14 o superior)
- PostgreSQL (v12 o superior)
- Un editor de código (como Visual Studio Code)

## Instalación

1. **Clonar el repositorio**

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd backend-postgres-app
   ```

2. **Instalar dependencias**

   Asegúrate de estar en la carpeta del proyecto y ejecuta:

   ```bash
   npm install
   ```

3. **Configurar variables de entorno**

   Crea un archivo `.env` en la raíz del proyecto y agrega la siguiente configuración:

   ```
   DATABASE_URL=postgres://usuario:contraseña@localhost:5432/nombre_basedatos
   PORT=3000
   ```

   Asegúrate de reemplazar `usuario`, `contraseña` y `nombre_basedatos` con tus credenciales de PostgreSQL.

## Ejecución

Para iniciar la aplicación, ejecuta el siguiente comando:

```bash
npm start
```

La aplicación se ejecutará en `http://localhost:3000`.

## Estructura del Proyecto

- **src/app.js**: Punto de entrada de la aplicación, configura el servidor Express y conecta a la base de datos.
- **src/db/index.js**: Maneja la conexión a la base de datos PostgreSQL.
- **src/routes/index.js**: Define las rutas de la aplicación.
- **src/controllers/index.js**: Contiene la lógica de negocio para manejar las solicitudes.
- **src/models/index.js**: Define los modelos de datos para interactuar con la base de datos.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.