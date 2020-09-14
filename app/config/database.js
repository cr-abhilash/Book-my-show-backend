const mysql = require("mysql");
const config = require("./db.config.js");
const fs = require("fs");

const connection = mysql.createConnection({
  host: config.HOST,
  user: config.USER,
  password: config.PASSWORD,
   
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});


const runQuery1=(query)=>{
    return new Promise((resolve,reject)=>{
    connection.query(query, (err, rows) => {
      if (err) reject(err)
      resolve(rows);
      
    });
  })
  }
    
  const createDatabase = `CREATE DATABASE IF NOT EXISTS testdb;`;
  const useDatabase = `USE testdb;`;
  const createMatchTable=`CREATE TABLE MATCH_TABLE1( id INT NOT NULL,PRIMARY KEY (id));`;

  const createDatabasesTable=()=>{
    let promiseQueryArray = [];
  
    promiseQueryArray.push(runQuery1(createDatabase));
    promiseQueryArray.push(runQuery1(useDatabase));
    promiseQueryArray.push(runQuery1(createMatchTable));
  
  let queryArray = Promise.all(promiseQueryArray);
  queryArray.then((data) => {
    return data;
  }).catch((error) => {
      console.log("createDatabasesTable error",error)
    });
  }
  module.exports=createDatabasesTable;
