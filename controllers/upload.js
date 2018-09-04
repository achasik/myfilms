// const Film = require('../models/film');
// const mongoose = require('mongoose');
// const Torrent = require('../models/torrent');
const multer = require('multer');

const storage = multer.diskStorage({
   destination: function(req, file, cb) {
      cb(null, 'public/uploads/');
   },
   filename: function(req, file, cb) {
      cb(null, file.originalname);
   }
});

const upload = multer({ storage: storage });

module.exports = {
   get: async (req, res) => {
      res.render('upload', {});
   },

   post: async (req, res) => {
      upload.single('fileupload');
      res.send('File upload sucessfully.');
   }
};
