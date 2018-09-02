const Film = require("../models/film");
const mongoose = require("mongoose");
const Torrent = require("../models/torrent");

module.exports = {
  home: async (req, res) => {
    // const page = req.query.page || 1;
    //const page = parseInt(pageStr);
    const hide = req.query.hide;
    const films = await Film.find(
      {
        seen: { $ne: true },
        torrents: { $gt: [] },
        updatedAt: { $gt: new Date(new Date() - 240 * 60 * 60 * 1000) }
      },
      { __v: 0 }
    ).sort({ year: -1, updatedAt: -1 });
    // .skip((page-1)*50)
    // .limit(50);
    if (hide) {
      const ids = films.map(f => f._id);
      const result = await Film.update(
        { _id: { $in: ids } },
        { $set: { seen: true } },
        { multi: true }
      );
    }
    res.render("home", { title: "Films found " + films.length, films: films });
  }
  // film: async (req, res) => {
  //   //const t = new Torrent();
  //   const id = req.params.id;
  //   const film = await Film.findById(id).populate("torrents");
  //   res.status(200).json(film);
  // },
  // post: async (req, res) => {
  //   const arr = req.body;
  //   const ids = arr.map(mongoose.Types.ObjectId);
  //   const result = await Film.update(
  //     { _id: { $in: ids } },
  //     { $set: { seen: true } },
  //     { multi: true }
  //   );
  //   res.send({ status: "SUCCESS", message: result.n });
  // }
};
