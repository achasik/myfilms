const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id: Number,
    name: String,
    active: Boolean,
    feeds: [{
        name: String,
        url: String
    }]
});

const Tracker = mongoose.model('Tracker', UserSchema);
module.exports = Tracker;