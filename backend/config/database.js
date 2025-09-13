const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString: env('DATABASE_URL'),
      ssl: env('NODE_ENV') === 'production' ? { rejectUnauthorized: false } : false,
    },
  },
});


