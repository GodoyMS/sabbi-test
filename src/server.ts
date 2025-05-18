import { AppDataSource } from './config/data-source';
import app from './app';

AppDataSource.initialize().then(() => {
  app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
}).catch(error => console.log(error));
