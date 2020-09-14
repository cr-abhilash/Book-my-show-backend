module.exports = {
  HOST: "localhost",
  PORT: "3000",
  USER: "root",
  PASSWORD: "Oiyishi@123",
  DB: "testdb",
  dialect: "mysql",
  pool: {
    max: 7,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
