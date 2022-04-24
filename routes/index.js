const routes = require('express').Router();



routes.get('/', (req, res) => {
    res.send('Hello Brittany Palmer!');
})

module.exports = routes;