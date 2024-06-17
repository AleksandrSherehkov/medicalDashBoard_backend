const axios = require('axios');

const pingServer = async () => {
  try {
    await axios.get(
      'https://medicaldashboard-backend-xv3e.onrender.com/api/auth/up/ping'
    );
    console.log('Ping successful');
  } catch (error) {
    console.error('Error pinging server:', error.message);
  }
};

module.exports = pingServer;
