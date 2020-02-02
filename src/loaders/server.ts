const loader: AppInitializer = async ({ app }) => {
  // Initialize server app with middlewares

  console.log('Initialize server app with middlewares');

  return { app };
};

export default loader;
