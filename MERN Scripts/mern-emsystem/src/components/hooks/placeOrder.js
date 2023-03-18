import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, } from "@fortawesome/free-solid-svg-icons";

import axios from 'axios';
//Bootstrap libs
import Row from 'react-bootstrap/esm/Row.js';
import Col from 'react-bootstrap/esm/Col.js';
import Container from 'react-bootstrap/esm/Container.js';
import Form from 'react-bootstrap/Form';

//Very important component 
//TODO: need to go through and document with cam - what are the classnames for 
//<select onChange={(e) => setLocValue(e.target.value)} aria-invalid={locValue ? "false" : "true"} id="location" className="locationStyle" class="required" >


//Used to verify if email is valid (will need to include more verification)
const REGEX = /^[a-zA-Z0-9_.-]{2,48}@[a-zA-Z0-9.]{2,28}\.(com|ca|net)$/;
const phoneREGEX = /^[(]?[0-9]{3}[)]?[ ,-]?[0-9]{3}[ ,-]?[0-9]{4}$/;


const PlaceOrder = () => {
    //location read
    
    
        const [location, setLocation] = useState([]);
        const [openStatus, setOpenStatus] = useState([]);
        const [stock, setStock] = useState([]);
        const [error, setError] = useState([]);
      
        const handleChange = (event) => {
          sessionStorage.setItem('location', event.target.value);
        }
 
        useEffect(() => {
            axios.get(`http://localhost:5001/location`, { 
              params: {
                Open: true
              }
            })
            .then(res => {
              const locationData = res.data;
              setLocation(locationData);
        
              const cleanStock = locationData.map((item) => item.Stock);
              setStock(cleanStock);
        
              const cleanOpenStatus = locationData.map((item) => item.Open);
              setOpenStatus(cleanOpenStatus);
        
              const cleanErrorMessage = locationData.map(() => "");
              setError(cleanErrorMessage);
            });
          }, []);
//end location read

    const navigate = useNavigate();

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
    const [validPhone, setValidPhone] = useState(false);
    const [phoneFocus, setPhoneFocus] = useState(false);

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

    const bundleTotal = sessionStorage.getItem("quantity");

    useEffect(() => {
        userRef.current.focus();
    }, [])

    //from previous match email hook  - checks both emails match
    useEffect(() => {
        const result = REGEX.test(email);
        const result2 = phoneREGEX.test(phoneNumber);
        //console.log(result);
        //console.log(email);
        setValidEmail(result);
        setValidPhone(result2);
        const match = email === matchEmail;
        setValidMatch(match);
    }, [email, phoneNumber, matchEmail])

    //from previous match email hook - sets err msg to null
    useEffect(() => {
        setErrMsg('');
    }, [email, matchEmail])

    // from previous match email hook - test email

    // TODO: There is a bug which allows you to submit form when:
    // you have entered valid information into every field and then
    // proceed to change one the emails. 

    function handleSubmit() {
        //to prevent bypass with JS hack
        //set local storage item #qty to value
        sessionStorage.setItem("quantity",document.getElementById("quantity").value);
        sessionStorage.setItem("location",document.getElementById("location").value);
        sessionStorage.setItem("phoneNumber", phoneNumber);
        //sessionStorage.setItem("email",email);
        sessionStorage.setItem("email",email);
        const v1 = REGEX.test(email);
        const v2 = REGEX.test(matchEmail);
        if(v1){
            if(v2){
                navigate("Payment");
            } else {
                setErrMsg("Invalid Entry");
            }
        } else {
            setErrMsg("Invalid Entry");
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

    // Order input form
    // Includes email, confirm email, phone, quantity, location

    //code for location select start! -- 
    
    
      

    return (
        <div className="orderFormWrapper">     
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <form classname="orderForm" onSubmit={(e) => handleSubmit()}> 
                <Row>
                <label htmlFor="email">Email: </label>  
                <br />
                <input
                    type="text"
                    id="email"
                    class="required"
                    className="textboxStyle"
                    ref={userRef}
                    autoComplete="off"
                    onInput={(e) => setEmail(e.target.value)}
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
                <Row>
                    <Col>
                    <label htmlFor="confirmEmail">Confirm Email: </label>
                    <span className={validMatch && matchEmail ? "valid" : "offscreen"}>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={validMatch || !matchEmail || !email ? "offscreen" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                    </Col>
                </Row>
                <br />
                
                <input
                    type="text"
                    id="confirmEmail"
                    class="required"
                    className="textboxStyle"
                    autoComplete="off"
                    onInput={(e) => setMatchEmail(e.target.value)}
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
                <br></br>
                <div className="phone-number">
                    <label htmlFor="phoneNumber" style={{paddingLeft: 12}}>Phone Number: </label>
                    <br></br>
                    <input
                        type="text"
                        id="phoneNumber"
                        class="required"
                        className="textboxStyleP"
                        ref={userRef}
                        required
                        autoComplete="off"
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                        aria-invalid={validPhone ? "false" : "true"}
                        aria-describedby="phoneNote"
                        onFocus={() => setPhoneFocus(true)} 
                    />
                    <p id="phoneNote" className={phoneFocus && phoneNumber && !validPhone ? "instructions" : "offscreen"} >
                    <FontAwesomeIcon icon={faInfoCircle} />
                        Invalid phone number
                    </p>
                </div>
                </Row>
                <br></br>
                <Row align="left">
                <hr></hr>
                <Col span={6}>
                    <label htmlFor="quantity">Quantity: $9.99/bundle</label> 
                    <br></br>    
                    <input
                        type="number"
                        id="quantity"
                        class="required"
                        className="locationStyle"
                        placeholder="1-20"
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

                </Col>
                <Col span={6}>
                    <div className="Location-List">
                        <label>Select Pickup Location: </label>
                        <br></br>

                        <Form.Select size="md" onChange={(e) => setLocValue(e.target.value)} aria-invalid={locValue ? "false" : "true"} id="location" className="locationStyle" class="required" >
                        <option value="">Select Location</option>
                        // TODO: change location selection to pull from DB
                        {location.map((content, index) =>
                                <option value={content.Name} key={content._id} Name={`buttons-${index}`} >{content.Name}</option>
                        )}
                        </Form.Select>
                         

                    </div>
                    </Col>
                </Row>
                <Row align="left">
                    <Col xl={{span: 8, offset: 3}} lg={{span: 8, offset: 3}} md={{span: 8, offset: 3}} sm={{span: 8, offset: 3}} xs={{span: 8, offset: 3}}>
                        <input type="submit" className="orderSubmit" disabled={!validMatch || !emailFocus || !email || !validEmail || !validValue || !validPhone || !locValue ? true : false}/>
                    </Col>
                </Row>
            </form>
        </div>
    )
}
export default PlaceOrder