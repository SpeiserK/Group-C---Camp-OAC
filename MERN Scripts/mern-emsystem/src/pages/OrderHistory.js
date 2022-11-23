import React from 'react'
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banner.js';
import axios from "axios";

const {useEffect, useState} = React;
const fetchData = async () => {
    return axios.get('http://localhost:5000/mongo')
    .then( ({data}) => {
        console.log(data);
        return JSON.stringify(data);

    })
    .catch( err => {

        console.error(err);
    });

}




function OrderHistory(){
    const [OrderData, setOrderData] = useState('');

    useEffect(() => {
        fetchData().then(Data => {
            setOrderData(Data || ' ');

        })
        
    });

    return(
        <div className="main">
            <Banner />
            <div className="container">
                
                <p>Order History.</p>





            {OrderData}
            </div>
            
            <div className="footer">
                <footer className="App-footer">
                    <Navbar />
                </footer>
            </div>
        </div>
    );
}
export default OrderHistory;