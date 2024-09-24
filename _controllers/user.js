const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const User = require('../_models/User');

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                email: req.body.email,
                password: hash,
                type: req.body.type,
            });
            user.save()
                .then(() => res.status(201).json(user))
                .catch(error => res.status(400).json({ error: 'Email already used' }));
        })
        .catch(error => res.status(500).json(error));
};

exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'Not Found' });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Wrong Password' });
                    }
                    res.status(200).json({
                        user: user,
                        token: jwt.sign(
                            { userId: user._id },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error: 'Internal Error' }));
        })
        .catch(error => res.status(500).json({ error: 'Internal Error' }));
};

exports.userExist = (req, res, next) => {
    User.findOne({ email: req.params.email })
        .then(user => {
            if (!user) {
                return res.status(200).json({ exist: false });
            }
            return res.status(200).json({ exist: true });
        })
        .catch(error => res.status(404).json({ error: 'Not Found' }));
}

exports.getUserByEmail = (req, res, next) => {
    User.findOne({ email: req.params.email })
        //.then(user => res.status(200).json(user))
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'Not Found' });
            }
            return res.status(200).json(user);
        }
        )
        .catch(error => res.status(404).json({ error: 'Not Found' }));
}

exports.getUserById = (req, res, next) => {
    User.findOne({ _id: req.params.id })
        .then(user => res.status(200).json(user))
        .catch(error => res.status(404).json({ error: 'Not Found' }));
}

exports.updateUser = (req, res, next) => {
    User.findOneAndUpdate(
        { email: req.params.email },
        { ...req.body, email: req.params.email },
        { new: true })
        .then((user) => res.status(200).json(user))
        .catch(error => res.status(400).json({ error: 'Not Found' }));
};

exports.uploadPicture = (req, res, next) => {

    User.findOneAndUpdate(
        { email: req.params.email },
        { imageUrl: `${req.protocol}://${req.get('host')}/_upload/images/${req.file.filename}` },
        { new: true })
        .then((user) => res.status(200).json(user))
        .catch(error => res.status(400).json({ error: 'Not Found' }));
};