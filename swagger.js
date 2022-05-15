const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts',
    description: 'Contacts API',
  },
  host: 'cse341-nodemcp.herokuapp.com',
  schemes: ['http'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);