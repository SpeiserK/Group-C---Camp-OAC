const express = require('express');
const router = express.Router();
const squareConnect = require('square');
//const uuidv4 = require('uuid/v4');


const { randomUUID } = require('crypto');
const { json } = require('express');

router.post('/', async (req, res) => {
  const token = req.body.token;

  //const payload = await json(req);
  //const idempotency_Key = payload.idempotencyKey;
  const idempotencyKey = randomUUID();
    
  const request_body = {
    idempotencyKey,
    sourceId: token,
    amountMoney: {
      amount: 999,
      currency: 'CAD'
    }
  };
  try{
    const { result: { payment } } = await paymentsApi.createPayment(request_body);

    const result = JSON.stringify(payment, (key, value) => {
      return typeof value === "bigint" ? parseInt(value) : value;
    }, 4);
    
    res.json({
      result
    });
  } catch (error) {
    res.json(error.result);
  }
});

module.exports = router;