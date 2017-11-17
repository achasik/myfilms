const express = require('express')
const PORT = process.env.PORT || 5000
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true});

app.use(bodyParser.json());
//routes
const trackers = require('./routes/trackers');
app.use('/trackers', trackers);

app.listen(PORT,()=> console.log('Node app is running on port', PORT));

