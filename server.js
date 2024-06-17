const mongoose = require('mongoose');

const app = require('./app');
const pingServer = require('./services/pingServer');

const { DB_HOST, PORT } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });

    setInterval(pingServer, 10 * 60 * 1000);
    pingServer();
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });
