const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const Agent = require('../_models/agent');

exports.getAgentByEmail = (req, res, next) => {
    Agent.findOne({ email: req.params.email })
        //.then(agent => res.status(200).json(agent))
        .then(agent => {
            if (!agent) {
                return res.status(401).json({ error: 'Not Found' });
            }
            return res.status(200).json(agent);
        }
        )
        .catch(error => res.status(404).json({ error: 'Not Found' }));
}

exports.getAgentById = (req, res, next) => {
    Agent.findOne({ _id: req.params.id })
        .then(agent => res.status(200).json(agent))
        .catch(error => res.status(404).json({ error: 'Not Found' }));
}

exports.createAgent = (req, res, next) => {
    const agent = new Agent({ ...req.body });
    agent.save()
        .then(() => { res.status(201).json({ message: 'Agent enregistré !' }) })
        .catch(error => { res.status(400).json({ error }) })
}

exports.updateAgent = (req, res, next) => {
    Agent.findOneAndUpdate(
        { email: req.params.email },
        { ...req.body, email: req.params.email },
        { new: true })
        .then((agent) => res.status(200).json(agent))
        .catch(error => res.status(400).json({ error: 'Not Found' }));
};


exports.addZones = (req, res, next) => {
    Agent.findOneAndUpdate(
        { email: req.params.email },
        { zones: req.body },
        //{ $push: { zones: req.body } },
        { new: true })
        .then((agent) => res.status(200).json(agent))
        .catch(error => res.status(400).json({ error: 'Not Found' }));
}