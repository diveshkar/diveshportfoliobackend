const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const database = require('./database');
// Remove the 'body-parser' import and usage

// Middleware Connections
app.use(cors());

const env = require('./middleware/validateEnv');

database();

// Use the built-in body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const MessageRouter = require('./routes/messageRoute');
app.use('/api/v1', MessageRouter);

app.use(function(req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' });
});

// Connection
const PORT = env.PORT || 6000;
app.listen(PORT, () => {
    console.log('App running on port: ' + PORT);
});
