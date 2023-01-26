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
        Pickup: 'false', 
        Location: this.props.queryLoc
      }
    })
      .then(res => {
        const orderData = res.data;
        this.setState({ orders: orderData });
      });
      this.setState({color: new Array(this.state.orders.length).fill("green")});
  }



  //approve order post
  approve(id,quantity,location,price,email) {
    //get date of approval
      var dateApprove = new Date();
      var offset = dateApprove.getTimezoneOffset();
    //get date of approval in pst
      dateApprove.setMinutes(dateApprove.getMinutes()-offset);
    //add two days to date of approval for pickup time limit
      dateApprove.setMinutes(dateApprove.getMinutes() + 2880);
      let datePickup = dateApprove.toString();
    //delete timezone details
      datePickup = datePickup.slice(0,11);


    axios.post('http://localhost:5000/statuschange', {
        id: id,
        status: "Approved",
        pickup: 'false',
        quantity: quantity,
        location: location,
        date: datePickup,
        price: price,
        email: email,

      })
      .then( response => {

      })
  }

  //decline order post

  decline(id) {

    axios.post('http://localhost:5000/statuschange', {
      id: id,
      status: "Denied",
      pickup: 'false'
    })
    .then( response => {

    } )
  }

  //confirm pickup post

  confirmPickup(id,orderStatus) {
    axios.post('http://localhost:5000/statuschange',{
      id: id,
      status: orderStatus,
      pickup: 'true'
  })
  .then( response =>{

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
          <td id="pickupStatus" className="listHeaderItem">
            <span> Pickup </span>
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
              <span>{content.Status}</span>&emsp;
                <button onClick={() => this.approve(content._id,content.Quantity,content.Location,content.Price,content.Name)}> Approve </button>
                <button onClick={() => this.decline(content._id)}> Deny </button>
              </td> 
              <td id="current-pickup" className ="orderChild">
                <span>Picked up: {content.Pickup ? "Complete" : "Pending"}</span>&emsp;
                <button onClick={() => this.confirmPickup(content._id,content.Status)}> Pickup Complete </button>
              </td>        
          </tr>
              
            )
        }
      </table>
    )

  }

}