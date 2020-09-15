module.exports = {
  HOST: "us-cdbr-east-02.cleardb.com",
  //PORT: "3000",
  USER: "bff46227a49d5b",
  PASSWORD: "6e309e95",
  DB: "heroku_34d6329da103fbb",
  dialect: "mysql",
  pool: {
    max: 7,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
