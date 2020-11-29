const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reportSchema = new Schema({
  dress: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },  
  printPrice: {
    type: Number,
    required: true,
  },  
  tailorPrice: {
    type: Number,
    required: true,
  },
  costPrice: {
    type: Number,
    required: true,
  },
  unitPrice: {
    type: Number,
    required: true,
  },
  paymentMode: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('Reports', reportSchema);