import React from 'react'
import { Link } from "react-router-dom";

function Orderqty(){
    return(
        <div>
            <p>Input the number of firewood bundles you would like to purchase.</p>
                <form>
                    <label for="quantity">
                        Number of bundles:     
                        <input type="text" id="quantity" name="quantity" />
                        <input type="submit" value="Next" />
                        <br></br>
                    </label>
                </form>
                <br></br>
            <Link to="/">Click here to go back</Link>
        </div>
    );
}

export default Orderqty;