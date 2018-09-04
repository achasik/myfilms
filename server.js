const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.Promise = global.Promise;
mongoose.connect(
   MONGODB_URI,
   { useMongoClient: true }
);
app.set('view engine', 'pug');
app.use((req, res, next) => {
   if (req.url === '/favicon.ico') {
      res.writeHead(200, { 'Content-Type': 'image/x-icon' });
      res.end();
   }
   // if(req.method != 'GET')
   //     next();
   const key = req.query.key;
   if (key === process.env.KEY) next();
   else {
      res.status(401);
      res.end();
   }
});
app.use(bodyParser.json());

const home = require('./routes/home');
const films = require('./routes/films');
const detail = require('./routes/detail');
const upload = require('./routes/upload');

app.use('/', home);
app.use('/films', films);
app.use('/detail', detail);
app.use('/upload', upload);

app.listen(PORT, () => console.log('Node app is running on port', PORT));
