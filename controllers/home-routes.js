const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User, Program, Phase, Workout, Exercise, ExData } = require('../models');

router.get('/', withAuth, (req, res) => {
    console.log('HOME');
    res.render('home', {
        loggedIn: req.session.loggedIn
    });
});

router.get('/login', (req, res) => {
    console.log('LOGIN');
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

// Render the My Workouts page
router.get('/my-workouts', withAuth, async (req, res) => {
    try {
        const dbUserData = await User.findByPk(req.session.user, {
            attributes: [ 'username', 'email' ],
            include: [
                {
                    model: Program,
                    attributes: [ 'name', 'description', 'start_date' ], /*
                    include: [
                        {
                            model: Phase,
                            attributes: [ 'name', 'number_of_weeks' ],
                            include: [
                                {
                                    model: Workout,
                                    attributes: [ 'name', 'position', 'sec_between_exercise' ],
                                    include: [
                                        {
                                            model: Exercise,
                                            attributes: [ 'name', 'description', 'position', 'goal_reps', 
                                                'goal_weight', 'goal_units', 'number_of_sets', 'sec_between_sets' ],
                                        }
                                    ]
                                }
                            ]
                        }
                    ]*/
                }
            ],
            raw: true,
            plain: false,
        });

        // Check for data and render the page if some exists, else throw 400
        if (!dbUserData) {
            res.status(400).json("message: no user data found");
        }

        console.log(JSON.stringify({user: dbUserData, loggedIn: req.session.loggedIn}));

        res.render('my-workouts', {
            user: dbUserData,
            loggedIn: req.session.loggedIn
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;