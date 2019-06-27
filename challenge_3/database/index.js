const Sequelize = require('sequelize');



const sequelize = new Sequelize('Checkout', 'root', '', {
  host:'localhost',
  dialect: 'mysql'
})

sequelize 
  .authenticate()
  .then(() => {
    console.log('Connection to sequelize is successful')
  })
  .catch(err => {
    console.error('Sequelize has failed to connect', err)
  })


  

  module.exports = sequelize;