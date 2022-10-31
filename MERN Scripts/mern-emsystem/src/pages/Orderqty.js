import React from 'react'
import { Link } from "react-router-dom";

function Orderqty(){
    return(
        <div>
            <p>Select firewood quantity.</p>
            <Link to="/">Click here to go back</Link>
        </div>
    );
}

export default Orderqty;