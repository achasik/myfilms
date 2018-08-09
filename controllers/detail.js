const mongoose = require("mongoose");
const Film = require("../models/film");
const Torrent = require("../models/torrent");

module.exports = {
  film: async (req, res) => {
    //const t = new Torrent();
    const id = req.params.id;
    const film = await Film.findById(id).populate("torrents");
    res.render("detail", { film: film });
  }
};
