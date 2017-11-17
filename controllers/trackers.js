const Tracker = require('../models/tracker');

module.exports = {
    index: async (req, res, next) => {

        const users = await Tracker.find({});
        throw new Error('test;')
        res.status(200).json(users);
    },

    newTracker: async (req, res, next) => {
        const newTracker = new Tracker(req.body);
        const tracker = await newTracker.save();
        res.status(201).json(tracker);
    }
};