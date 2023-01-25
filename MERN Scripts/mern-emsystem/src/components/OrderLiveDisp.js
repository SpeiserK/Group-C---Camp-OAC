import React from 'react';
import axios from 'axios';



export default class OrderLiveDisp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      orders: [],
      color: []
    }
  }
    
  componentDidMount() {
    //const statusReq = this.props.query1;
    axios.get(`http://localhost:5000/order`, { 
      params: {
        Status: this.props.query1,
        Pickup: 'false'//,
        //Location: 'Rutland'
      }
    })
      .then(res => {
        const orderData = res.data;
        this.setState({ orders: orderData });
      });
      this.setState({color: new Array(this.state.orders.length).fill("green")});
  }



  //approve order post
  approve(id) {

    axios.post('http://localhost:5000/statuschange', {
        id: id,
        status: "Approved"
      })
      .then( response => {

      })
  }

  //decline order post

  decline(id) {

    axios.post('http://localhost:5000/statuschange', {
      id: id,
      status: "Denied"
    })
    .then( response => {

    } )
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
            .map((content, index) =>
              
            <tr id="list-orderList" key={content._id} Name={`buttons-${index}`}>  
              <td id="current-orderID" className ="orderChild">
                <span>{content._id}</span>&emsp;
              </td>         
              <td id="current-orderEmail" className ="orderChild">
                <span>{content.Name}</span>&emsp;
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
              <span>{content.Status} &nbsp; Picked up: {content.Pickup.toString()}</span>&emsp;
                <button onClick={() => this.approve(content._id)}> Approve </button>
                <button onClick={() => this.decline(content._id)}> Deny </button>
              </td>         
          </tr>
              
            )
        }
      </table>
    )

  }

}