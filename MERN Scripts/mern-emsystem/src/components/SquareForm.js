import { PaymentForm, CreditCard, GooglePay, ApplePay, Ach } from 'react-square-web-payments-sdk';

export default function SquareForm() {
  return (
    <div className="payForm">
      <PaymentForm
        applicationId="sandbox-sq0idb-7JEDuestTK6Hj-fdj6C0FA"
        cardTokenizeResponseReceived={ async (token, verifiedBuyer) => {
          const response = await fetch('hooks/pay', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify({
              sourceId: token.token
            })
          })
          alert(JSON.stringify(await response.json(), null, 2));
        }}
        locationId="LS2QD8Y1ET9FY"
      >
        {/* Component for taking Credit Card payment */}
        <CreditCard />
        {/* Component for taking Direct Debit payment */}
        <Ach accountHolderName="John Doe" redirectURL="https://example.com" transactionId="54321" />
      </PaymentForm>
    </div>
  )
}