import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

const PlaceOrder = () => {

    const [orderValue, setOrderValue] = useState('');
    const [validValue, setValidValue] = useState(false);
    const userRef = useRef();
    const minBundle = 1;
    const maxBundle = 21;

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        if(orderValue > minBundle && orderValue < maxBundle){
            setOrderValue(orderValue);
            const result = orderValue === setOrderValue;
            setValidValue(result);
        }
    }, [orderValue])

    const handleSubmit = async (e) => {
        e.preventDefault();
        //to prevent bypass with JS hack
        if(a!=0){
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
            <LocationsList /> 
             <form>
                <label htmlFor="quantity">
                    Number of bundles:     
                    <input 
                        type="text"
                        id="quantity"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setOrderValue(e.target.value)}
                    />
                    <button disabled={!validValue || !orderValue ? true : false} onClick={(e) => handleClick()}
                    >Next</button>
                    <br></br>
                </label>
            </form>
        </div>
    )
}
export default PlaceOrder