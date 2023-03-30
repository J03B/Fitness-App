const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ExData extends Model { }
  
ExData.init(
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
        exercise_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'exercise',
                key: 'id',
            },
        },
        set_number: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        reps: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        weight: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        units: {
            type: DataTypes.STRING,
            allowNull: false,
            values: [
                'lbs',
                'bw',
            ],
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'ex_data',
    }
);
    
module.exports = ExData;
