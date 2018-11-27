module.exports = function (sequelize, DataTypes) {
    var Profile = sequelize.define("Profile", {
        user: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        frien: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        games: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        groups: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        }
    });
    return Profile;
};