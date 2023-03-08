import React, { Component } from 'react';
import axios from 'axios';


// twilio recovery: N4y2RRDuQ3WNqO2MpbwQRIcs1-n4q8SDpn2rvMZx
class SMSForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          message: {
            to: props.userData.phoneNumber,
            // accepted message template
            body: props.approve ? `Hello there!\nYour order for firewood bundles from Ogopogo Rotary and Camp OAC has been approved, You can now pickup your order from ${props.userData.Location}:
            \nOrder Number: ${props.userData._id}
            \nPickup Address: ADDRESS
            \nPickup Location: ${props.userData.Location}
            \nQuantity/price: ${props.userData.Quantity}/\$${props.userData.Price}
            \nOther Notes: 
            \nThank you very much and we will see you soon!
            \nTHIS IS AN AUTOMATIC MESSAGE, PLEASE DO NOT REPLY`
            :
            // denied message template
            `Hello there!\nUnfortunately your order was not approved, for the following reasons:
            \n*STATE REASONS HERE*
            \nThis can happen sometimes, feel free to submit another order, or visit our website for more information about why your order may have been declined: URL
            \nTHIS IS AN AUTOMATIC MESSAGE, PLEASE DO NOT REPLY`
          },
          submitting: false,
          error: true,
          success: ""
        };
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onHandleChange(event) {
        const name = event.target.getAttribute('name');
        this.setState({
          message: { ...this.state.message, [name]: event.target.value }
        });
    }

    async onSubmit(event) {
      event.preventDefault();
      this.setState({ submitting: true });
      const mark = await fetch('http://localhost:5001/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.message)
      })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            this.setState({
              error: false,
              submitting: false,
              message: {
                to: '',
                body: ''
              }
            });
          } else {
            this.setState({
              error: true,
              submitting: false
            });
          }
        })
        .then(() => {
          if (this.state.error)return;
        });

      if (this.props.approve) {
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
        axios.post('http://localhost:5001/statuschange', {
            id: this.props.userData._id,
            status: "Approved",
            pickup: 'false',
            quantity: this.props.userData.Quantity,
            location: this.props.userData.Location,
            date: datePickup,
            price: this.props.userData.Price,
            email: this.props.userData.Name
        })
        .then( response => {
          window.location.reload();
        })
      } else {
        axios.post('http://localhost:5001/statuschange', {
          id: this.props.userData._id,
          status: "Denied",
          pickup: 'false'
        })
        .then( response => {
          window.location.reload();
        } )
      }

    }

    render() {
      return (
        <form
          onSubmit={this.onSubmit}
          className={this.state.error ? 'error sms-form' : 'sms-form'}
        >
          <div>
            <label htmlFor="to">To:</label><br/>
            <input
              type="tel"
              name="to"
              id="to"
              class="form-control"
              value={this.state.message.to}
              onChange={this.onHandleChange}
            />
          </div>
          <div>
            <label htmlFor="body">Message:</label><br/>
            <textarea
              name="body"
              id="body"
              class="form-control"
              style={{height: '400px'}}
              value={this.state.message.body}
              onChange={this.onHandleChange}
            />
          </div>
          <button type="submit" disabled={this.state.submitting}>
            Send message and {this.props.approve ? "Approve" : "Deny"}
          </button><br/>
            {this.state.error ? "message has not been sent" : "Message successfully sent"}
         </form>
      );
    }
}

export default SMSForm;