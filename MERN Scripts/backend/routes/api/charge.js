const express = require('express');
const router = express.Router();
const squareConnect = require('square');
const { Client, Environment } = require("square");
//const uuidv4 = require('uuid/v4');


const { randomUUID } = require('crypto');
const { json } = require('express');

const client = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: Environment.Sandbox,
});

const paymentsApi = client.paymentsApi;

router.post('/', async (req, res) => {
  const token = req.body.sourceId.token;
  console.log(token);
  //const payload = await json(req);
  //const idempotency_Key = payload.idempotencyKey;
  const idempotencyKey = randomUUID();
    
  const request_body = {
    sourceId: token,
    idempotencyKey: idempotencyKey,
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
    
    console.log(result);
    res.json({
      result
    });
  } catch (error) {
    console.log(error);
    res.json(error.result);
  }
});

module.exports = router;