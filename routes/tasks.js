const router = require('express').Router();
let Task = require('../models/tasks.model');

router.route('/tasks').get((req, res) => {
    Task.find()
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Err' + err));
});

router.route('/tasks/:id').get((req, res) => {
    Task.findById(req.params.id)
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Error' + err))
})

router.route('/tasks/add').post((req, res) => {
    const dateToFinish = req.body.dateToFinish || ''
    const title = req.body.title || ''
    const content = req.body.content || ''
    const isFinished = Boolean(req.body.isFinished) || false

    const newTask = new Task({
        dateToFinish,
        title,
        content,
        isFinished
    })

    newTask.save()
        .then(() => res.json('Task added!'))
        .catch(error => res.status(400).json('Error when adding new task' + error))
});

router.route('/tasks/:id').delete((req, res) => {

    Task.findByIdAndDelete(req.params.id)
        .then(() => res.json('Task deleted'))
        .catch(err => res.status(400).json('Delete NOT successful' + err))
})

router.route('/tasks/:id').put(((req, res) => {

    Task.findByIdAndUpdate(req.params.id, {
        isFinished: req.body.isFinished,
        title: req.body.title,
        content: req.body.content,
        dateToFinish: req.body.dateToFinish
    }, {new: true})
        .then((updated) => res.json(updated))
        .catch(err => res.status(400).json('Update NOT successful' + err))
}))
module.exports = router;
