const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    categoryName: String,
    categoryColor: String,
});

module.exports = mongoose.model('category', categorySchema);