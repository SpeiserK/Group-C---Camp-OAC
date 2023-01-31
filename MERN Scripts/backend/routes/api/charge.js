const express = require('express');
const router = express.Router();
const squareConnect = require('square-connect');
//const uuidv4 = require('uuid/v4');
import { randomUUID } from 'crypto';

router.route('/').post((req, res) => {
    try {
        const { nonce, amount } = req.body;
        const { access_token } = process.env.SQUARE_ACCESS_TOKEN;
    
        const transaction_api = new squareConnect.TransactionsApi();
        const request_body = {
          source_id: sourceId,
          amount_money: {
            amount: amount,
            currency: 'CAD',
          },
          idempotency_key: randomUUID(),
        };
        const response = await transaction_api.charge(access_token, 'LS2QD8Y1ET9FY', request_body);
        res.json({
            status: 'success',
            transaction: response.transaction,
          });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message,
        });
    }
});

module.exports = router;