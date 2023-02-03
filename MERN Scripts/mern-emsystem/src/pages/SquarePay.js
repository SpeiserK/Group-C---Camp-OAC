import { PaymentForm, CreditCard } from 'react-square-web-payments-sdk';
import { useEffect, useState } from 'react';
import SquareCheck from '../components/SquareCheck.js';

const SquarePay = () => {

    const [output, setOutput] = useState([]);

    return (
    <div className="payForm">
      <PaymentForm
        applicationId="sandbox-sq0idb-7JEDuestTK6Hj-fdj6C0FA"
        locationId="LS2QD8Y1ET9FY"
        // Generates unique token to be assigned to transaction
        cardTokenizeResponseReceived={async (token, buyer) => {
          // Request body
          // Contains: locationId, applicationId, sourceId, and quantity
          const body = JSON.stringify({
            locationId: process.env.SQUARE_LOCATION_ID,
            applicationId: process.env.SQUARE_APPLICATION_ID,
            sourceId: token,
            quantity: 2
          });
          console.log("Token Received: ", token);
          // Post request to backend 
          const response = await fetch('http://localhost:5001/charge', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: body
          })
          if(response.ok) {
            return response.json();
          }
          alert(JSON.stringify(await response.json(), null, 2));
          let output = await response.json();
          console.log(output);
          console.info('Token:', token);
          console.info('Verified Buyer:', buyer);

          setOutput(output);
        }}
      >
        {/* Component for taking Credit Card payment */}
        <CreditCard />
        </PaymentForm>
    </div>
    )
}
export default SquarePay;