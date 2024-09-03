const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

const projectRoutes = require('./_routes/project');
const userRoutes = require('./_routes/user');

mongoose.connect('mongodb+srv://antoinecd:fVu0vXm1vBR1LnuM@dealwacluster.cj5vq.mongodb.net/?retryWrites=true&w=majority&appName=DealwaCluster',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/project', projectRoutes);
app.use('/api/user', userRoutes);
app.use('/_upload/images', express.static(path.join(__dirname, '_upload/images')));



module.exports = app;