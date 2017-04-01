const config = {
  host: process.env.NOTFORGOTTEN_DB_HOST,
  port: process.env.NOTFORGOTTEN_DB_PORT,
  user: process.env.NOTFORGOTTEN_DB_USER,
  password: process.env.NOTFORGOTTEN_DB_PASSWORD,
  database: process.env.NOTFORGOTTEN_DB_NAME,
};

module.exports = config;
