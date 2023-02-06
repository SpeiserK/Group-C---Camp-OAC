import React, { useState } from 'react';
import { PaymentForm, CreditCard } from 'react-square-web-payments-sdk';

const SquareCheck = (props) => {
  const [amount, setAmount] = useState(0);

  const handleCardTokenizeResponseReceived = async (token, verifiedBuyer) => {
    await fetch('http://localhost:5000/charge', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nonce: token.nonce, amount, sourceId: token.token }),
    });
  };

  return (
    <PaymentForm
      sandbox={true}
      applicationId='sandbox-sq0idb-7JEDuestTK6Hj-fdj6C0FA'
      locationId='LS2QD8Y1ET9FY'
      amount={amount}
      cardTokenizeResponseReceived={handleCardTokenizeResponseReceived}
    >
      <CreditCard />
    </PaymentForm>
  );
};

export default SquareCheck;