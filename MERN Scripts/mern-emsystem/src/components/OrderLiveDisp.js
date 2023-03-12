import React from 'react';
import axios from 'axios';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import MSGForm from './msgForm/MSGForm';
import Button from 'react-bootstrap/Button';


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
    axios.get(`http://localhost:5001/order`, { 
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

  confirmPickup(id,orderStatus) {
    axios.post('http://localhost:5001/statuschange',{
      id: id,
      status: orderStatus,
      pickup: 'true'
  })
  .then( response =>{
    window.location.reload();
  })
  }

  popOver(data, approve) {
    return (
    <Popover id={"popover" + data._id + approve} title={(approve ? "Approve Order": "Deny Order")} style={{width: '300px', maxWidth: 'None', padding: '7px', height: '600px'}}>
      <strong>{approve ? "Approve Order" : "Deny Order" }</strong><br/>Please check the message before Sending
      <MSGForm userData={data} approve={approve}/>
    </Popover>
    
  );
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
          { this.props.query1 === "Pending" ?(
            <td id="headerStatus" className="listHeaderItem">
              <span> Status </span>
            </td>): (<></>)
          }
          { this.props.query1 === "Approved" ?(
          <td id="pickupStatus" className="listHeaderItem">
            <span> Pickup </span>
          </td> ): (<></>)
          }
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
          { this.props.query1 === "Pending" ?(
              <td id="current-approve-deny"className ="orderChild"> 
              <span>{content.Status}</span>&emsp;
                <OverlayTrigger trigger="click" placement="right" overlay={this.popOver(content, true)}>
                  <button class='btn btn-primary'>Approve</button>
                </OverlayTrigger>
                <OverlayTrigger trigger="click" placement="right" overlay={this.popOver(content, false)}>
                  <button class='btn btn-danger'>Deny</button>
                </OverlayTrigger>
              </td> ): (<></>)
          }
          { this.props.query1 === "Approved" ?(
              <td id="current-pickup" className ="orderChild">
                <span>Picked up: {content.Pickup ? "Complete" : "Pending"}</span>&emsp;
                <button onClick={() => this.confirmPickup(content._id,content.Status)}> Pickup Complete </button>
              </td>   ): (<></>)
          }      
          </tr>
              
            )
        }
      </table>
    )

  }

}