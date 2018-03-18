"use strict";

const restify = require('restify');
const app = restify.createServer();
const Hero = require('./hero');

app.get('/heroes', (req, res, next) => {
    Hero.findAll().then(results => res.json(results));
});

app.listen(8000, () => {
    console.log('%s listening at %s', app.name, app.url);
});