const express = require('express');
const cors = require('cors');
const accountRouter = require('./api/account');
const productsRouter = require('./api/products');
const colorsRouter = require('./api/colors');
const reviewsRouter = require('./api/reviews');
const bodyParser = require ('body-parser');
const cookieParser = require ('cookie-parser');
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require('../swagger.json');
const app = express();


app.get("/", (req, res) => {
  res.send("Welcome to the bellacasa RESTful API!<hr><br> Author: Roxana Elena Pop <br> Student ID: W18004367 <br> Details: This is an API created as part of the Final Year Project.<br> Documentation: The documentation for this API can be found at /api-docs.");
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(cors({origin: 'http://localhost:1234', credentials: true}));
app.use(express.json());
app.use (cookieParser());

app.use('/account', accountRouter);
app.use('/products', productsRouter);
app.use('/colors', colorsRouter);
app.use('/reviews', reviewsRouter);

app.use((err, req, res, next) =>{
    const statusCode = err.statusCode ||500;

    res.status(statusCode).json({
        type: 'error', message: err.message
    })
});

module.exports = app;