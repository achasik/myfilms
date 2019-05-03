const mongoose = require("mongoose");
const Film = require("../models/film");
const Torrent = require("../models/torrent");

module.exports = {
  index: async (req, res) => {
    const page = req.query.page || 1;
    const search = req.query.search;
    //const page = parseInt(pageStr);
    let films;
    if (search) {
      films = await Film.find(
        {
          $or: [
            { name: { $regex: search, $options: "i" } },
            { nameRu: { $regex: search, $options: "i" } }
          ],
          torrents: { $gt: [] } //,
          // updatedAt: { $gt: new Date(new Date() - 240 * 60 * 60 * 1000) }
        },
        { __v: 0 }
      ).sort({ year: -1, updatedAt: -1 });
    } else {
      films = await Film.find(
        {
          seen: { $ne: true },
          torrents: { $gt: [] } //,
          // updatedAt: { $gt: new Date(new Date() - 240 * 60 * 60 * 1000) }
        },
        { __v: 0 }
      )
        .sort({ year: -1, updatedAt: -1 })
        .skip((page - 1) * 50)
        .limit(50);
    }

    res.status(200).json(films);
  },
  film: async (req, res) => {
    //const t = new Torrent();
    const id = req.params.id;
    const film = await Film.findById(id).populate({
      path: "torrents",
      options: { sort: { createdAt: 1 } }
    });
    res.status(200).json(film);
  },
  post: async (req, res) => {
    const arr = req.body;
    const ids = arr.map(mongoose.Types.ObjectId);
    const result = await Film.update(
      { _id: { $in: ids } },
      { $set: { seen: true } },
      { multi: true }
    );
    res.send({ status: "SUCCESS", message: result.n });
  }
};
