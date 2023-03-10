import React from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

export default class CustomerHistory extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        orders: []
      }
    }
    
    componentDidMount() {
        axios.get(`http://localhost:5001/orderCust`, { 
            params: {
              phoneNumber: this.props.query1,
              order: this.props.query2
            }
          })
            .then(res => {
              const orderData = res.data;
              this.setState({ orders: orderData });
            });
    }

  
    render() {

        const handleDate = (date) => {
            const dateArr = new String(date);
            var newDate = "20"+dateArr.charAt(2)+dateArr.charAt(3)+"/"+dateArr.charAt(5) + dateArr.charAt(6)+"/"+dateArr.charAt(8)+dateArr.charAt(9);
            return newDate;
        }

      return (
          <Table className="custTable" striped="columns" variant="warning">
            <thead>
                <tr >
                    <th>
                    contact
                    </th>
                    <th>
                    location / date
                    </th>
                    <th colSpan={2}>
                    order details
                    </th>
                </tr> 
            </thead>
          
  
          {
            this.state.orders
              .map((content,index) =>
            <tbody>
                <tr key={content._id} Name={`buttons-${index}`}>  
                  <td>
                     {content.Name}<br></br>{content.phoneNumber}
                  </td>
                  <td>
                      {content.Location}<br></br> {handleDate(content.Datetime)}
                  </td>
                  <td colSpan={2}>
                  Bundles: {content.Quantity} &nbsp; ${content.Price} &nbsp; {content.Payment} <br></br> Status: {content.Status} &nbsp;|  Pickup: {content.Pickup ? "Complete" : "Incomplete"}&emsp;
                  </td>      
                </tr>
            </tbody>
              )
          }
        </Table>
      )
    }
  }