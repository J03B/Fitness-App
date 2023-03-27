const User = require('./User');
const Program = require('./Program');
const Phase = require('./Phase');
const Workout = require('./Workout');
const Exercise = require('./Exercise');
const ExData = require('./ExData');

// Define Belong-To Relationships
ExData.belongsTo(Exercise, {
    foreignKey: 'exercise_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

Exercise.belongsTo(Workout, {
    foreignKey: 'workout_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

Workout.belongsTo(Phase, {
    foreignKey: 'phase_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

Phase.belongsTo(Program, {
    foreignKey: 'program_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

Program.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

// Define Has-Many Relationships
User.hasMany(Program, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

Program.hasMany(Phase, {
    foreignKey: 'program_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

Phase.hasMany(Workout, {
    foreignKey: 'phase_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

Workout.hasMany(Exercise, {
    foreignKey: 'workout_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

Exercise.hasMany(ExData, {
    foreignKey: 'exercise_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

module.exports = { 
    User,
    Program,
    Phase,
    Workout,
    Exercise,
    ExData
};