require('dotenv').config();

const env = {
  API_KEY:process.env.API_KEY,
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI
};

const env_type = {
  PRODUCTION: 'PRODUCTION',
  DEVELOPMENT: 'DEVELOPMENT',
  TEST: 'TEST'
};

module.exports = {
  env,
  env_type
};
