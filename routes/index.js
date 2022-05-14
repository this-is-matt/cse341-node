const routes = require('express').Router();

// routes.get('/', (req, res) => {
//     res.send('Hello Brittany Palmer!');
// });

routes.use('/', require('./home'));
// not working, not sure why it is exactly like the instructors code
routes.use('/contacts', require('./contacts'));


module.exports = routes;