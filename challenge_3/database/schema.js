const Sequelize = require('sequelize');
const connection = require('./index.js');

const Users = connection.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: true
  },
  address1: {
    type: Sequelize.STRING,
    allowNull: true
  },
  address2: {
    type: Sequelize.STRING,
    allowNull: true
  },
  city: {
    type: Sequelize.STRING,
    allowNull: true
  },
  state: {
    type: Sequelize.STRING,
    allowNull: true
  },
  zipCode: {
    type: Sequelize.STRING,
    allowNull: true
  },
  creditCard: {
    type: Sequelize.STRING,
    allowNull: true
  },
  expDate: {
    type: Sequelize.STRING,
    allowNull: true
  },
  cvv: {
    type: Sequelize.STRING,
    allowNull: true
  },
  billingZip: {
    type: Sequelize.STRING,
    allowNull: true,
    
  }
  
},
{timestamps: false}
)

Users.sync({force: true})
.then(() => {
  console.log('database is synced')
})
.catch((err) => {
  console.log('there is err in sync',err)
})

module.export = Users;

