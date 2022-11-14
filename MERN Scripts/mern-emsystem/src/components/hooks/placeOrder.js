import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import LocationsList from '../../components/LocationsList.js'
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PlaceOrder = () => {

    const [orderValue, setOrderValue] = useState('');
    const [validValue, setValidValue] = useState(false);
    const [locValue, setLocValue] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const userRef = useRef();
    const minBundle = 0;
    const maxBundle = 21;

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        if(orderValue > minBundle && orderValue < maxBundle){
            setOrderValue(orderValue);
            const result = (orderValue < maxBundle && orderValue > minBundle);
            setValidValue(result);
        }
    }, [orderValue])

    useEffect(() => {
        setLocValue(locValue);
    }, [locValue])

    const handleSubmit = async (e) => {
        e.preventDefault();
        //to prevent bypass with JS hack
        if(1!=0){
            setErrMsg("Invalid Entry");
            return;
        }
    }
    const gotoOrder = useNavigate();

    function handleClick(){
        gotoOrder("payment");
    }
    return (
        <div>
        <p>Input the number of firewood bundles you would like to purchase.</p>
            <p id="email">Logged in as:</p>
            <div className="Location-List">
                <label>
                    Select Pickup Location: 
                <select onChange={(e) => setLocValue(e.target.value)} aria-invalid={locValue ? "false" : "true"}>
        <option value="select" disabled selected>Select a location</option>
        <option value="West Kelowna">West Kelowna</option>
        <option value="Rutland">Rutland</option>
        <option value="Mission">Mission</option>
        <option value="Lake Country">Lake Country</option>
        <option value="Glenmore"> Glenmore </option>
        <option value="Kelowna Central"> Kelowna Central </option>
                </select>
                </label>
            </div>
             <form>
                <label htmlFor="quantity">
                    Number of bundles:     
                    <input 
                        type="number"
                        id="quantity"
                        ref={userRef}
                        min="1"
                        max="20"
                        autoComplete="off"
                        onChange={(e) => setOrderValue(e.target.value)}
                        aria-describedby="uidnote"
                    />
                    <button disabled={!validValue || !locValue ? true : false} onClick={(e) => handleClick()}
                    >Next</button>
                    <p id="uidnote" className={!validValue ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    *Order size must be between 1-20*
                    </p>
                    <br></br>
                </label>
            </form>
        </div>
    )
}
export default PlaceOrder