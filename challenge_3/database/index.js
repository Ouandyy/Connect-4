const Sequelize = require('sequelize');



const connection = new Sequelize('Checkout', 'root', '', {
  host:'localhost',
  dialect: 'mysql'
})

connection 
  .authenticate()
  .then(() => {
    console.log('Connection to sequelize is successful')
  })
  .catch((err) => {
    console.error('Sequelize has failed to connect', err)
  })


  

  module.exports = connection;