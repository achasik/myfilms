const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true});

app.use((req, res, next) => {
    const key = req.query.key;
    if(key === process.env.KEY)
        next();
    else{
        res.status(401);
        res.send();
    }        
});

app.use(bodyParser.json());

const films = require('./routes/films');
app.use('/films', films);

app.listen(PORT,()=> console.log('Node app is running on port', PORT));

