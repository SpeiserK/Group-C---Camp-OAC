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
      
      <ul className="dblist">
        <div id="listHeader" className="listHeader">
          <div id="headerEmail"  className="listHeaderItem">
            <span> Email </span>
          </div>
          <div id="headerQuantity" className="listHeaderItem">
            <span> Quantity </span>
          </div>
          <div id="headerLocation" className="listHeaderItem">
            <span> Location </span>
          </div>
          <div id="headerDate" className="listHeaderItem">
            <span> Date </span>
          </div>
          <div id="headerPrice" className="listHeaderItem">
            <span> Price </span>
          </div>
          <div id="headerApproved" className="listHeaderItem">
            <span> Approve </span>
          </div>
        </div>
        {
          this.state.orders
            .map((content, index) =>
              
            <li id="list-orderList" key={content._id}>
            <div className="orderList" id = {content._id} key={`buttons-${index}`}>
              <div id="current-orderEmail" className ="orderChild">
                <span>{content.Name}</span>&emsp;
              </div>
              <div id="current-orderQty" className ="orderChild">
                <span>{content.Quantity}</span>&emsp;
              </div>
              <div id="current-orderLoc" className ="orderChild">
                <span>{content.Location}</span>&emsp;
              </div>
              <div id="current-orderDate" className ="orderChild">
                <span> DATE </span>&emsp;
              </div>
              <div id="current-orderPrice" className ="orderChild">
                <span> $$$ </span>&emsp;
              </div>
              <div id="current-approve-deny"className ="orderChild"> 
                <p> {this.state.color[index]}</p>
                <button onClick={() => this.approve(index)}> Approve</button>
                <button onClick={() => this.decline(index)}> Deny </button>
              </div>
            </div>
            
          </li>
              
            )
        }
      </ul>
    )

  }

}