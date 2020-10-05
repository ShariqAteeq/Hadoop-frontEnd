const router = require('express').Router();
let Excercise = require('../models/excercise.model');

router.route('/').get((req, res) => {
    Excercise.find()
        .then(excercises => res.json(excercises))
        .catch(err => res.status(400).json('Error :' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const status = req.body.status;
    const city = req.body.city;
    const gender = req.body.gender;
    const age = req.body.age;
    const quali = req.body.quali;
    const date = Date.parse(req.body.date);

    const newExcercise = new Excercise({
        username,
        email,
        status,
        city,
        gender,
        age,
        quali,
        date,
    });

    newExcercise.save()
        .then(() => res.json('Excercise Added!'))
        .catch(err => res.status(400).json('Error :' + err));
});

router.route('/:id').get((req, res) => {
    Excercise.findById(req.params.id)
        .then(excercises => res.json(excercises))
        .catch(err => res.status(400).json('Error :' + err));
});

router.route('/:id').delete((req, res) => {
    Excercise.findByIdAndDelete(req.params.id)
        .then(() => res.json('Excercise Deleted'))
        .catch(err => res.status(400).json('Error :' + err));
});

router.route('/update/:id').post((req, res) => {
    Excercise.findById(req.params.id)
        .then(excercise => {
            excercise.username = req.body.username;
            excercise.email = req.body.email;
            excercise.status = req.body.status;
            excercise.city = req.body.city;
            excercise.gender = req.body.gender;
            excercise.age = req.body.age;
            excercise.quali = req.body.quali;
            excercise.date = Date.parse(req.body.date);

            excercise.save()
            .then(() => res.json('Excercise Updated'))
            .catch(err => res.status(400).json('Error :' + err));
        })
        .catch(err => res.status(400).json('Error :' + err));
});

module.exports = router;