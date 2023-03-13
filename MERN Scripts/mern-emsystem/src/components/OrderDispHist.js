import React from 'react';
import axios from 'axios';

export default class OrderDispHist extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      orders: []
    }
  }
  
  componentDidMount() {
    axios.get(`http://localhost:5001/orderHist`, {
      params: {
        phoneNumber: this.props.phonNum,
        email: this.props.email,
        order: this.props.queryDate,
        loc: this.props.queryLoc,
        status: this.props.queryStat
      }
    })
      .then(res => {
        const orderData = res.data;
        this.setState({ orders: orderData });
      })
  }

  render() {
    return (
        <table className="dblist">
        <tr id="listHeader" className="listHeader">
          <td id="headerID"  className="listHeaderItem">
            <span> Order id </span>
          </td>
          <td id="headerEmail"  className="listHeaderItem">
            <span> Email </span>
          </td>
          <td id="headerQuantity" className="listHeaderItem">
            <span> Quantity </span>
          </td>
          <td id="headerLocation" className="listHeaderItem">
            <span> Location </span>
          </td>
          <td id="headerDate" className="listHeaderItem">
            <span> Date </span>
          </td>
          <td id="headerPrice" className="listHeaderItem">
            <span> Payment Details</span>
          </td>
          <td id="headerStatus" className="listHeaderItem">
            <span> Status </span>
          </td>
        </tr> 

        {
          this.state.orders
            .map((content,index) =>
            
              <tr id="list-orderList" key={content._id} Name={`buttons-${index}`}>  
                <td id="current-orderID" className ="orderChild">
                  <span>{content._id}</span>&emsp;
                </td>     
                <td id="current-orderEmail" className ="orderChild">
                    <span>{content.Name}<br></br>{content.phoneNumber}</span>&emsp;
                </td>
                <td id="current-orderQty" className ="orderChild">
                    <span>{content.Quantity}</span>&emsp;
                </td>
                <td id="current-orderLoc" className ="orderChild">
                    <span>{content.Location}</span>&emsp;
                </td>
                <td id="current-orderDate" className ="orderChild">
                  <span>{content.Datetime}</span>&emsp;
                </td>
                <td id="current-orderPrice" className ="orderChild">
                  <span>${content.Price} &nbsp; {content.Payment}</span>&emsp;
                </td>
                <td id="current-approve-deny"className ="orderChild"> 
                  <span>{content.Status} &nbsp; Picked up: {content.Pickup ? "Complete" : "Incomplete"}</span>&emsp;
                </td>         
              </tr>
            )
        }
      </table>
    )
  }
}