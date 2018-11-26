module.exports = function(sequelize, DataTypes) {
    var Comments= sequelize.define("Comments", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }},
      comments: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      sender: {
          type: DataTypes.TEXT,
          allowNull: false,
          validate: {
            len: [1]
          }
      }
  
    });
    return Comments;
  };