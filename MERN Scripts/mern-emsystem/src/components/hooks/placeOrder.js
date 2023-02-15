import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, } from "@fortawesome/free-solid-svg-icons";

//Very important component 
//TODO: need to go through and document with cam - what are the classnames for 



//Used to verify if email is valid (will need to include more verification)
const REGEX = /^[a-zA-Z0-9_.-]{3,48}@[a-zA-Z0-9.]{2,28}\.(com|ca|net)$/;


const PlaceOrder = () => {

    // set order value to ''
    const [orderValue, setOrderValue] = useState('');

    // set valid value to false
    const [validValue, setValidValue] = useState(true);
    //set locValue to false
    const [locValue, setLocValue] = useState(false);

    // user ref and error ref 
    const userRef = useRef();
    const errRef = useRef();

    //set min and max bundle
    const minBundle = 0;
    const maxBundle = 21;

    //set phonenumber to ''
    const [phoneNumber, setPhoneNumber] = useState('');

    //email check constants
        //first email input
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
        //confirm email input
    const [matchEmail, setMatchEmail] = useState(' ');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);
        // error const
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    //from previous match email hook  - checks both emails match
    useEffect(() => {
        const result = REGEX.test(email);
        //console.log(result);
        //console.log(email);
        setValidEmail(result);
        const match = email === matchEmail;
        setValidMatch(match);
    }, [email, matchEmail])

    //from previous match email hook - sets err msg to null
    useEffect(() => {
        setErrMsg('');
    }, [email, matchEmail])

    // from previous match email hook - test email
    const handleSubmit = async (e) => {
        e.preventDefault();
        //to prevent bypass with JS hack
        const v1 = REGEX.test(email);
        if(!v1){
            setErrMsg("Invalid Entry");
            return;
        }
    }

    useEffect(() => {
        if(orderValue > minBundle || orderValue < maxBundle){
            setOrderValue(orderValue);
            const result = (orderValue < maxBundle || orderValue > minBundle);
            setValidValue(result);
        }
    }, [orderValue])

    useEffect(() => {
        setLocValue(locValue);
    }, [locValue])

    const gotoOrder = useNavigate();

    function checkInput(){
        let orderVal = document.getElementById("quantity").value;
        if(orderVal >= 1 && orderVal <= 20 && (orderVal%1===0)){
            

            handleSubmit();
            orderVal = "true";
            gotoOrder("payment");
            //set local storage item #qty to value
            localStorage.setItem("quantity",document.getElementById("quantity").value);
            localStorage.setItem("location",document.getElementById("location").value);
            localStorage.setItem("phoneNumber", phoneNumber);
            localStorage.setItem("email",email);
        } else {
            orderVal = "false";
        }
    }

    

    return (
        <div className="orderFormWrapper">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <form classname="orderForm"> 
                
            <label htmlFor="email">
                    Email:
            </label>  
                <br />
                <input
                    type="text"
                    id="email"
                    className="textboxStyle"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-invalid={validEmail ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setEmailFocus(true)} 
                />
                <p id="uidnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"} >
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Please enter a valid email.
                </p>
                <br />
                <label htmlFor="confirmEmail">
                    Confirm Email:
                </label>
                    <span className={validMatch && matchEmail ? "valid" : "offscreen"}>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={validMatch || !matchEmail || !email ? "offscreen" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                    <br />
                
                <input
                    type="text"
                    id="confirmEmail"
                    className="textboxStyle"
                    autoComplete="off"
                    onChange={(e) => setMatchEmail(e.target.value)}
                    required
                    aria-invalid={validMatch ? "false" : "true"}
                    aria-describedby="emailNote"
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                />
                <p id="emailNote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Must match the first email input field.<br />
                </p>
                
                    <form className="orderQuantity">
                        <label htmlFor="quantity">
                            Number of bundles: (Max 20) 
                        </label> 
                        <br></br>    
                            <input
                                type="number"
                                id="quantity"
                                className="locationStyle"
                                ref={userRef}
                                min="1"
                                max="20"
                                autoComplete="off"
                                onChange={(e) => setOrderValue(e.target.value)}
                                aria-describedby="uidnote"
                            />
                            <p id="uidnote" className={!validValue ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            *Order size must be between 1-20*
                            </p>
                            
                        
                    </form>
                    <div className="Location-List">
                        <label>
                            Select Pickup Location: 
                        </label>
                        <br></br>
                        <select onChange={(e) => setLocValue(e.target.value)} aria-invalid={locValue ? "false" : "true"} id="location" className="locationStyle" >
                            {// TODO: change location selection to pull from DB
                            }
                <option value="select" disabled selected>Select a location</option>
                <option value="West Kelowna">West Kelowna</option>
                <option value="Rutland">Rutland</option>
                <option value="Mission">Mission</option>
                <option value="Lake Country">Lake Country</option>
                <option value="Glenmore"> Glenmore </option>
                <option value="Kelowna Central"> Kelowna Central </option>
                        </select>
                        
                    </div>
                    <br></br>
                    <div className="phone-number">
                    <label>
                    Phone Number:
                    </label>
                    <br></br>
                        <input
                        type="text"
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                        />
                    
                    </div>
                <button className="buttonStyle" disabled={!validValue || !locValue ? true : false} onClick={(e) => checkInput()}>
                    Next
                </button>
            </form>
        </div>
    )
}
export default PlaceOrder