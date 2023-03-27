const router = require('express').Router();
const { User } = require('../../models');

// CREATE new user
// eslint-disable-next-line no-use-before-define
router.post('/signup', async (req, res) => {
  try {
    const dbUserData = await User.create({
      name: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.user = dbUserData.id;
    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post('/login', async (req, res) => {
  // Attempt to log in
  try {
    // Check if email exists
    let dbUserData = await User.findOne({
      where: {
        email: req.body.emailOrUsername,
      },
    });
    if (!dbUserData) {
      // Email did not exist - check if username exists
      dbUserData = await User.findOne({
        where: {
          username: req.body.emailOrUsername,
        },
      });
      if (!dbUserData) {
        res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
     
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.user = dbUserData.id;
    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
