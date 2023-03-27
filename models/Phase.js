const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Phase extends Model { }
  
Phase.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        program_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'program',
                key: 'id',
            },
        },
        number_of_weeks: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'phase',
    }
);
    
module.exports = Phase;
