const express = require('express');
const swaggerUi = require('swagger-ui-express');
const bodyParser = require('body-parser');
const openApiDocumentation = require('../openapi.json');

const {
	dumbRoutes,
} = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

app.get('/', (req, res) => {
	res.json({
		status: true
	})
});

app.use('/dumb', dumbRoutes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(openApiDocumentation));

module.exports = app;
