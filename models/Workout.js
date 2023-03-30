const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Workout extends Model { }
  
Workout.init(
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
        phase_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'phase',
                key: 'id',
            },
        },
        position: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        sec_between_exercise: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'workout',
    }
);
    
module.exports = Workout;
