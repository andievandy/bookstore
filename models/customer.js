'use strict';
module.exports = (sequelize, DataTypes) => {

  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Customer extends Model{

  }

  Customer.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.STRING,
    phoneNumber: DataTypes.STRING
  }, {sequelize});
  
  Customer.associate = function(models) {
    Customer.belongsToMany(models.Book, {through: models.Transaction});
    Customer.hasMany(models.Transaction);
  };
  return Customer;
};