"use strict";

const Sequelize = require('sequelize');
const db = require('./db');

let schema = {
    id: {
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    name: Sequelize.STRING,
    identity: Sequelize.STRING,
    hometown: Sequelize.STRING,
    age: Sequelize.INTEGER,
};

const Hero = db.define('heroe', schema, {
    timestamps: false
});

module.exports = Hero;