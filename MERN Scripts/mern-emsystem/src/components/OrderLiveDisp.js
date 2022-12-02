import React from 'react';
import axios from 'axios';



export default class OrderLiveDisp extends React.Component {
  
  state = {
    orders: [],
    color: []
  }

  componentDidMount() {
    
    axios.get(`http://localhost:5000/order`)
      .then(res => {
        const orderData = res.data;
        this.setState({ orders:orderData });
      });
      this.setState({color: new Array(this.state.orders.length).fill("green")});
  }

  

  approve(index) {
    console.log("clicked!", index);
    const cloneColor = [...this.state.color];
    cloneColor[index] = "approved"
    this.setState({ color: cloneColor });
  }
  decline(index) {
    console.log("clicked!", index);
    const cloneColor = [...this.state.color];
    cloneColor[index] = "denied"
    this.setState({ color: cloneColor });
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
            <span> Price </span>
          </td>
          <td id="headerApproved" className="listHeaderItem">
            <span> Approve </span>
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
                <span> Date </span>&emsp;
              </td>
              <td id="current-orderPrice" className ="orderChild">
                <span> $$$ </span>&emsp;
              </td>
              <td id="current-approve-deny"className ="orderChild"> 
                <p> {this.state.color[index]}</p>
                <button onClick={() => this.approve(index)}> Approve</button>
                <button onClick={() => this.decline(index)}> Deny </button>
              </td>         
          </tr>
              
            )
        }
      </table>
    )

  }

}