import { PaymentForm, CreditCard } from 'react-square-web-payments-sdk';
import { useState } from 'react';

const SquarePay = () => {

    const [output, setOutput] = useState([]);

    const Quantity = localStorage.getItem("quantity");

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
          });
          
          const data = await response.json();
          console.log(data);

          if (data.errors && data.errors.length > 0) {
            if (data.errors[0].detail) {
              window.showError(data.errors[0].detail);
            } else {
              window.showError('Payment Failed.');
            }
          } else {
            alert('Payment Successful!');
          }
        }
        }
        >
        {/* Component for taking Credit Card payment */}
        <CreditCard />
        <p>Total: ${Quantity*9.99}</p>
        </PaymentForm>
    </div>
    )
}
export default SquarePay;