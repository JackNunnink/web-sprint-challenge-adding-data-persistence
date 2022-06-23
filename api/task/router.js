// build your `/api/tasks` router here
const express = require('express');
const router = express.Router();

const Tasks = require('./model');

router.get('/', (req, res, next) => {
    Tasks.getTasks()
        .then(tasks => {
            res.status(200).json(tasks.map(task => ({ ...task, task_completed: task.task_completed === 1 })))
        })
        .catch(next)
});

router.post('/', (req, res, next) => {
    const task = req.body

    Tasks.createTask(task)
        .then(task => {
            res.status(200).json({ ...task, task_completed: task.task_completed === 1 })
        })
        .catch(next)
})

module.exports = router;