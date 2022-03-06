const router = require('express').Router;
let Task = require('../models/tasks.model');

router.route('/').get((req, res) => {
    Task.find()
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Err' + err));
});

router.route('/add').post((req, res) => {
    const id = req.body.id;
    const dateCreated = Number(req.body.dateCreated)
    const dateToFinish = Number(req.body.dateCreated)
    const header = req.body.header
    const content = req.body.content
    const isFinished = Boolean(req.body.isFinished)

    const newTask = new Task({
        id,
        dateCreated,
        dateToFinish,
        header,
        content,
        isFinished
    })

    newTask.save()
        .then(() => res.json('Task added!'))
        .catch(error => res.status(400).json('Error when adding new task' + error))
})
