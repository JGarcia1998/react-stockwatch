'use strict';
module.exports = (sequelize, DataTypes) => {
  const NewUsers = sequelize.define('NewUsers', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  NewUsers.associate = function(models) {
    // associations can be defined here
  };
  return NewUsers;
};