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

    // Save service in the database
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

// Retrieve all services from the database.
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

// Find a single service with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Service.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving service with id=" + id
            });
        });
};

// Update service by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Service.update(req.body, {
        where: { id_service: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Service was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update service with id=${id}. Maybe service was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating service with id=" + id
            });
        });
};

// Delete service with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Service.destroy({
        where: { id_service: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Service was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete service with id=${id}. Maybe service was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete service with id=" + id
            });
        });
};

// Delete services all from the database.
exports.deleteAll = (req, res) => {
    Service.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} services were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all services."
            });
        });
};
