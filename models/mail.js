module.exports = function(sequelize, DataTypes) {
  var Mails= sequelize.define("Mail", {
    sender: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }},
    receiver: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    readed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    senderDelete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    recieverDelete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }

  });
  return Mails;
};
