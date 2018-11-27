module.exports = function(sequelize, DataTypes) {
    var Friend= sequelize.define("Friend", {
      user: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }},
      frien: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
  
    });
    return Friend;
  };
