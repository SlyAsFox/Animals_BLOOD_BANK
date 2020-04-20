const express = require('express');
const cors = require('cors');

const usersRoutes = require('./routes/api/v1/users');
const animalsRoutes = require('./routes/api/v1/animals');
const clinicsRoutes = require('./routes/api/v1/clinics');
const staffsRoutes = require('./routes/api/v1/staffs');
const donationsRoutes = require('./routes/api/v1/donations');
const bloodBanksRoutes = require('./routes/api/v1/bloodBanks');
const bloodRequestsRoutes = require('./routes/api/v1/bloodRequests');
const medicalChecksRoutes = require('./routes/api/v1/medicalChecks');

const app = express();

app.use(cors());

// const { People, Articles } = require('./models');
const sequelize = require('./sequelize');

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send({
        data: 'Homepage'
    });
});

app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/animals', animalsRoutes);
app.use('/api/v1/clinics', clinicsRoutes);
app.use('/api/v1/staffs', staffsRoutes);
app.use('/api/v1/donations', donationsRoutes);
app.use('/api/v1/bloodBanks', bloodBanksRoutes);
app.use('/api/v1/bloodRequests', bloodRequestsRoutes);
app.use('/api/v1/medicalChecks', medicalChecksRoutes);

app.use((error, req, res, next) => {
    res.send({
        error: error.message
    });
});

module.exports = app;
