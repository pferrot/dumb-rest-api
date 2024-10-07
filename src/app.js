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
app.get("/docs/open-api.json", (req, res) => res.json(openApiDocumentation));

var options = {
    swaggerOptions: {
        url: "/docs/open-api.json",
    },
}
app.use('/docs', swaggerUi.serveFiles(null, options), swaggerUi.setup(openApiDocumentation, options));

module.exports = app;
