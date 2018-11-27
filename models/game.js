module.exports = function(sequelize, DataTypes) {
    let Game = sequelize.define("Game", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Game;
}