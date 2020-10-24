const router = require('express').Router();
let User = require('../models/users.model');
const { userRegister , userLogin } = require('../utils/Auth');

router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error :' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const newUser = new User({ username , password  });

    newUser.save()
    .then(() => res.json('User Added!'))
    .catch(err => res.status(400).json('Error :' + err));
});

router.post("/register-user", async (req, res) => {
    await userRegister(req.body, "user", res);
  });

 router.post("/login-user", async (req, res) => {
    await userLogin(req.body, "user", res);
  });
  
module.exports = router;
