// build your `/api/projects` router here
const express = require('express');
const router = express.Router();

const projectModel = require('./model.js');

router.get('/', (req, res, next) => {
    projectModel.getProjects()
        .then(projects => {
            res.status(200).json(projects.map(proj => ({...proj, project_completed: proj.project_completed === 1})));
        })
        .catch(err => {
            next(err);
        });
});

router.post('/', (req, res, next) => {
    projectModel.createProject()
        .then(project => {
            console.log(project)
            res.status(201).json(project)
        })
        .catch(next);
});

module.exports = router;