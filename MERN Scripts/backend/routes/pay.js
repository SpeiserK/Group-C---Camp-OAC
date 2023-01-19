import { Client } from 'square';
import { randomUUID } from 'crypto';

SQUARE_ACCESS_TOKEN.env.local = EAAAELql3EigTRh3QbNoSnOuFLzYvuJNZw8AHqmUmk7v4M5Y3Gx9e0JDFUo22mQX

const { paymentsApi } = new Client({
    accessToken: process.env.SQUARE_ACCESS_TOKEN,
    environment: 'sandbox'
});

export default async function handler(req, res) {
    if ( req.method === 'POST' ) {
      const { result } = await paymentsApi.createPayment({
        idempotencyKey: randomUUID(),
        sourceId: req.body.sourceId,
        amountMoney: {
          currency: 'CAD',
          amount: 999
        }
      })
      console.log(result);
      res.status(200).json(result);
    } else {
      res.status(500).send();
    }
  }