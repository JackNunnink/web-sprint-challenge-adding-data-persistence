// build your `/api/resources` router here
const express = require('express');
const router = express.Router();

const resourceModel = require('./model');

router.get('/', (req, res, next) => {
    resourceModel.getResources()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(err => {
            next(err);
        });
});

router.post('/', (req, res, next) => {
    resourceModel.createResource(req.body)
        .then(resource => {
            res.status(201).json(resource);
        })
        .catch(err => {
            next(err);
        });
});

module.exports = router;