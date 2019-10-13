const application = require('./dist');

module.exports = application;

if (require.main === module) {
  const config = {
    rest: {
      port: +(process.env.PORT || 3333),
      host: process.env.HOST,
      openApiSpec: {
        setServersFromRequest: true,
      },
    },
  };
  application.main(config).catch(err => {
    console.error('Cannot start the application.', err);
    process.exit(1);
  });
}
