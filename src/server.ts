import { AppDataSource } from './config/data-source';
import app from './app';
import { env } from './config/configEnv';

AppDataSource.initialize().then(() => {
  app.listen(env.PORT, () => {
    console.log('Server listening on port', env.PORT);
    console.log('Database connection established');
    console.log('Swagger documentation running on ', '/api-docs');

  });
}).catch(error => console.log(error));
