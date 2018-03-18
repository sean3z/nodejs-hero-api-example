"use strict";

const Sequelize = require('sequelize');

const db = new Sequelize('heroes', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 10
    }
});

module.exports = db;