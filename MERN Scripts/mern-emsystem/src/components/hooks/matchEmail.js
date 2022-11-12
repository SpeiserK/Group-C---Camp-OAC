import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

//Used to verify if email is valid (will need to include more verification)
const EMAIL_REGEX = /^(?=.*[a-zA-Z0-9])(?=.*[@])(?=.*[.])[a-zA-Z0-9-_.@]{8,48}$/;

const EmailCheck = () => {
    const userRef = useRef();
    const errRef = useRef();

    //first email input
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    //confirm email input
    const [matchEmail, setMatchEmail] = useState(' ');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    //const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    //check for email match
    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        //console.log(result);
        //console.log(email);
        setValidEmail(result);
        const match = email === matchEmail;
        setValidMatch(match);
    }, [email, matchEmail])

    useEffect(() => {
        setErrMsg('');
    }, [email, matchEmail])

    const handleSubmit = async (e) => {
        e.preventDefault();
        //to prevent bypass with JS hack
        const v1 = EMAIL_REGEX.test(email);
        if(!v1){
            setErrMsg("Invalid Entry");
            return;
        }
    }
    const gotoOrder = useNavigate();

    function handleClick(){
        gotoOrder("order");
    }

    return(
        <section className="textbox">
            <p>If you wish to purchase firewood, we'll need an email we can the send order information to.</p>
            <br></br>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                    Email:
                </label>  
                <br />
                <input
                    type="text"
                    id="email"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-invalid={validEmail ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setEmailFocus(true)} 
                />
                <p id="uidnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Please enter a valid email.
                </p>
                <br />
                <label htmlFor="confirmEmail">
                    Confirm email:
                    <span className={validMatch && matchEmail ? "valid" : "offscreen"}>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={validMatch || !matchEmail ? "offscreen" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                    <br />
                </label>
                <input
                    type="text"
                    id="confirmEmail"
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
                <br></br>
                <button disabled={!validEmail || !validMatch ? true : false} onClick={(e) => handleClick()}
                >Continue</button>
            </form>
        </section>
    )            
}
export default EmailCheck