'use strict';
module.exports = function(sequelize, DataTypes) {
  var Search = sequelize.define('Search', {
    body: DataTypes.TEXT,
    date: DataTypes.DATE,
    location: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Search;
};