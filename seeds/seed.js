const sequelize = require('../config/connection');
const { User, Program, Phase, Workout, Exercise, ExData } = require('../models');

const UserData = require('./UserData.json');
const ProgramData = require('./ProgramData.json');
const PhaseData = require('./PhaseData.json');
const WorkoutData = require('./WorkoutData.json');
const ExerciseData = require('./ExerciseData.json');
// const ExDataData = require('./ExDataData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(UserData, {
        individualHooks: true,
        returning: true,
    });

    const program = await Program.bulkCreate(ProgramData);
    const phase = await Phase.bulkCreate(PhaseData);
    const workout = await Workout.bulkCreate(WorkoutData);
    const exercise = await Exercise.bulkCreate(ExerciseData);
    // const exData = await ExData.bulkCreate(ExDataData);

    process.exit(0);
};

seedDatabase();