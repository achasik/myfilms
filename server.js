const express = require('express')
const PORT = process.env.PORT || 5000
const app = express();

//routes
const trackers = require('./routes/trackers');
app.use('/trackers', trackers);

app.listen(PORT,()=> console.log('Node app is running on port', PORT));

