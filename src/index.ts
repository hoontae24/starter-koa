// Import external modules
import moment from 'moment';
import Koa from 'koa';

// Import internal modules
import loaders from 'loaders';
import { config } from 'consts';
import routes from 'routes';

const start = async () => {
  // Create server instance such as Express, Koa
  const app = new Koa();

  // Initialize by loaders(database, middlewares, etc...)
  await loaders.init({ app });

  // Initialize routes(api)
  await routes.init({ app });

  // Start server application
  app.listen(config.port, () => {
    const now = moment().format('YYYY-MM-DD HH:mm:ss');
    console.log(`${now}> Server is started on port ${config.port}`); // eslint-disable-line
  });
};

start();
