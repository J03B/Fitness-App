const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Exercise extends Model { }
  
Exercise.init(
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
        workout_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'workout',
                key: 'id',
            },
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        position: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        goal_reps: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        goal_weight: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        goal_units: {
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
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'exercise',
    }
);
    
module.exports = Exercise;
