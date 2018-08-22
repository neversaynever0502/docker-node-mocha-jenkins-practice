'use strict';

const express = require('express');
var Sequelize = require('sequelize');


// const Op = Sequelize.Op;
// var sequelize = new Sequelize('postgres', 'postgres', 'password', {
//   host : 'db', 
//   port : '5432', 
//   dialect : 'postgres',
//   operatorsAliases: Op,
// });

// sequelize
// .authenticate()
// .then(() => {
//   console.log('Connection has been established successfully.');
// })
// .catch(err => {
//   console.error('Unable to connect to the database:', err);
// });


// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  // res.send('Hello world\n');
  res.json({text:'hello'})
});

//


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}=>NODE_ENV:${process.env.NODE_ENV}`);
