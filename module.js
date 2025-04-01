const mongoose = require('mongoose');
const schema = mongoose.Schema;

const linkModel = new schema({
    link: String
});

const Link = mongoose.model('ruwan', linkModel);

module.exports = Link;