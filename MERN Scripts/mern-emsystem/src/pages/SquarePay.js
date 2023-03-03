import { PaymentForm, CreditCard } from 'react-square-web-payments-sdk';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../components/Banner';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';

const SquarePay = () => {

    const [output, setOutput] = useState([]);

    const Quantity = sessionStorage.getItem("quantity");

    const navigate = useNavigate();

    return (
      <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
<Row>
      <Banner />
</Row>
<Row>
<Col lg={5} md={5} sm={5} xs={5} style={{ paddingLeft: 0, paddingRight: 0 }}>
  <div id="paySummary">

    <table id="squareTable">
      <tr>
        <th>Bundles:</th>
        <th>Total Price:</th>
      </tr>
      <tr>
        <td> {Quantity} </td>
        <td> ${Quantity*9.99} </td>
      </tr>
    </table>
    
  </div>
</Col>
<Col lg={4} md={4} sm={12} xs={12} style={{ paddingLeft: 0, paddingRight: 0 }}>
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
            sourceId: token
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

          async function statusCheck(onSuccess) {
            if (data.errors && data.errors.length > 0) {
              if (data.errors[0].detail) {
                window.showError(data.errors[0].detail);
              } else {
                window.showError('Payment Failed.');
              }
            } else {
              onSuccess()
            }
          }
          statusCheck(() => navigate("SquareReceipt"));
        }
        }
        >
        {/* Component for taking Credit Card payment */}
        <CreditCard />
        
        </PaymentForm>
    </div>
    </Col>
    </Row>
    </Container>
    )
}
export default SquarePay;