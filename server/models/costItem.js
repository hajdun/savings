const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const costItemSchema = new Schema({
    itemName: String,
    itemCategory: { 'categoryName': String, 'categoryColor': String },
    unitPrice: Number,
    itemAmount: Number,
    itemBoughtDate: String,
    itemBoughtRegularness: Boolean
});

module.exports = mongoose.model('costItem', costItemSchema);