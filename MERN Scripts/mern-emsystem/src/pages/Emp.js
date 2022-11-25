import React from 'react'
import EmpTools from '../components/EmpTools.js';
import axios from "axios";
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banner.js';
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

function Emp(){
    const [userData, setUserData] = useState('');

    useEffect(() => {
        fetchData().then(Data => {
            setUserData(Data || ' ');

        })
        
    }, []);


    return(
        <div className="main">
            <Banner />
            <div className="container">
                <EmpTools />
                <button onClick={() => {
                fetchData();
                }}>get data</button>
                {userData}
            </div>
            
            <div className="footer">
                <footer className="App-footer">
                    <Navbar />
                </footer>
            </div>
        </div>
    );
}
export default Emp;