import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import Logo from '../components/Logo.js';
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banner.js';
import PaymentSummary from '../components/PaymentSummary.js';
import Progressbar from '../components/Progressbar.js';
import axios from 'axios';

//import PlaceOrder from '..components/hooks/placeOrder.js';

function Payment(){
const navigate = useNavigate();
const [Order, setOrder] = useState({
    Name: '',
    Quantity: '',
    Location: ''

})

function handleClick() {
    setOrder( input => {
        return(
            {
                Name: localStorage.getItem("email"),
                Quantity: localStorage.getItem("quantity"),
                Location: localStorage.getItem("location") 
            }
        )
    }

    )
    console.log(Order);
}


const newOrder = {
    Name: localStorage.getItem("email"),
    Quantity: localStorage.getItem("quantity"),
    Location: localStorage.getItem("location")
}




    return(
            <div className="main">
                <Banner />
                
                <PaymentSummary />

                <div className="container">
                <button onClick={handleClick}>Pay with Square</button>
                <button onClick={() => navigate("CashConfirmation")}> Pay with Cash </button>
                <button onClick={() => navigate("ETransferConfirmation")}> Pay with e-transfer </button>
                    <Link onClick={() => navigate(-1)}>Click here to go back</Link><br></br>
                </div>
                <div className="footer">
                    <footer className="App-footer">
                        <Navbar />
                    </footer>
                </div>
            </div>
    );
}

export default Payment;