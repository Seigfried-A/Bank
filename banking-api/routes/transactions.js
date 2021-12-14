const express = require('express');
const router = express.Router();

const Transaction = require('../models/Transaction');

//all post routes...
router.post('/send', async (req, res) => {
  const transaction = new Transaction({
    amount: req.body.amount,
    receiver: req.body.receiver,
    type: 'SENT',
  });

  try {
    const savedTransaction = await transaction.save();
    res.json(savedTransaction);
  } catch (err) {
    res.status(500).send({ message: err });
  }
});

router.post('/receive', async (req, res) => {
  const transaction = new Transaction({
    amount: req.body.amount,
    sender: req.body.sender,
    type: 'RECEIVED'
  });

  try {
    const savedTransaction = await transaction.save();
    res.json(savedTransaction);
  } catch (err) {
    res.status(500).send({ message: err });
  }
});

router.get('/all', async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (err) {
    res.status(500).send({ message: err });
  }
});

module.exports = router;
