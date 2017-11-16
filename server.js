const express = require('express')
//const path = require('path')
const PORT = process.env.PORT || 5000
const app = express();

app.get ('/', (req,res,next)=>{
  res.status(200).json({ message: 'Hello world'});
});
//app.set('port', PORT);
app.listen(PORT,()=> console.log('Node app is running on port', PORT));

