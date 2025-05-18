// swagger.ts
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'SABBI TECHNICAL TASK DOCUMENTATION API',
      version: '1.0.0',
      description: 'Documentación de la API generada  Swagger',
      contact:{
        name:"Godoy Muñoz",
        url:"https://godoyperu.com",
        email:"godoyliam.dev@gmail.com"
      }
    },
    tags: [
      {
        name: "Productos Individuales",
        description: "Operaciones relacionadas a productos individuales",
      },
      {
        name: "Productos Compuestos",
        description: "Operaciones relacionadas a productos compuestos",
      },
    ],
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./src/routes/*.ts', './src/controllers/*.ts'], // rutas con comentarios JSDoc
};

const specs = swaggerJsdoc(options);

export { swaggerUi, specs };
