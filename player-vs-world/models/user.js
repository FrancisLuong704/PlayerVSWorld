module.exports = function(sequelize, DataTypes) {
    var User= sequelize.define("User", {
      Username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }},
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      description: {
        type: DataTypes.TEXT
       
      },
      password: DataTypes.STRING,
      sid: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
    });
    return User;
  };