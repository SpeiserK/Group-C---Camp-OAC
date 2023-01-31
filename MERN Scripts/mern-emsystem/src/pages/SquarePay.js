import { PaymentForm, CreditCard } from 'react-square-web-payments-sdk';
import { useEffect, useState } from 'react';
import SquareCheck from '../components/SquareCheck.js';

const SquarePay = () => {

    const [output, setOutput] = useState([]);
    return (
    <div className="payForm">
      <PaymentForm
        applicationId="sandbox-sq0idb-7JEDuestTK6Hj-fdj6C0FA"
        cardTokenizeResponseReceived={async (token, buyer) => {
          const response = await fetch('http://localhost:5000/charge', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify({sourceId: token.token})
          })
          alert(JSON.stringify(await response.json(), null, 2));
          let output = await response.json()
          console.log(output)
          console.info('Token:', token);
          console.info('Verified Buyer:', buyer);

          setOutput(output);
        }}
        locationId="LS2QD8Y1ET9FY"
      >
        {/* Component for taking Credit Card payment */}
        <CreditCard />
        </PaymentForm>
        <SquareCheck />
    </div>
    )
}
export default SquarePay;