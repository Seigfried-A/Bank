const mongoose = require('mongoose');

const TransactionSchema = mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  sender: {
    type: String,
  },
  receiver: {
    type: String,
  },
  type: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Transactions', TransactionSchema);
