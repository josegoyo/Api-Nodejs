const db = require('../models');
const Service = db.service;
const Op = db.sequelize.Op;

// Create and Save new Service
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Service
    const service = {
        name: req.body.name,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    };

    // Save Tutorial in the database
    Service.create(service)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the service."
            });
        });

};

// Retrieve all from the database.
exports.findAll = (req, res) => {

    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    Service.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving services."
            });
        });

};

// Find a single with an id
exports.findOne = (req, res) => {

};

// Update by the id in the request
exports.update = (req, res) => {

};

// Delete with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all from the database.
exports.deleteAll = (req, res) => {

};
