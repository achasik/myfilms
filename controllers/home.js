const Film = require('../models/film');
const Torrent = require('../models/torrent');

const films = await Film.find(
   { seen: { $ne: true }, torrents: { $gt: [] }, updatedAt: { $gt: new Date(new Date() - 120 * 60 * 60 * 1000) } },
   { __v: 0 }
).sort({ year: -1, updatedAt: -1 });

module.exports = {  
   home: async (req, res) => {
      res.render('home', { title: 'Films found ' + films.length, films: films });
   },
   film: async (req, res) => {
      //const t = new Torrent();
      const id = req.params.id;
      const film = await Film.findById(id).populate('torrents');
      res.status(200).json(film);
   },
   post: async (req, res) => {
      const arr = req.body;
      const ids = arr.map(mongoose.Types.ObjectId);
      const result = await Film.update({ _id: { $in: ids } }, { $set: { seen: true } }, { multi: true });
      res.send({ status: 'SUCCESS', message: result.n });
   }
};
