import { PaymentForm, CreditCard, GooglePay, ApplePay } from 'react-square-web-payments-sdk';

export default function SquareForm() {
  return (
    <div className="payForm">
      <PaymentForm
        applicationId="sandbox-sq0idb-7JEDuestTK6Hj-fdj6C0FA"
        cardTokenizeResponseReceived={(token, verifiedBuyer) => {
          console.log('token:', token);
          console.log('verifiedBuyer:', verifiedBuyer);
        }}
        locationId='LS2QD8Y1ET9FY'
      >
          <CreditCard />
      </PaymentForm>
    </div>
  )
}