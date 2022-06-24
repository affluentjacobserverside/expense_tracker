const mongoose = require('mongoose');

// create a schema for transaction
const TransactionSchema = new mongoose.Schema({
    text:{
        type: String,
        trim: true,
        required: [true, 'Please Add Some Text']
    },
    amount: {
        type: Number,
        required: [true, 'Please Add a positive or Negative number']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Transaction', TransactionSchema);

