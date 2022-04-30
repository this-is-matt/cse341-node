const routes = require('express').Router();

// routes.get('/', (req, res) => {
//     res.send('Hello Brittany Palmer!');
// });

routes.use('/', require('./home'));
routes.use('/contacts', require('./contacts'));

// not working

module.exports = routes;