import {useState} from 'react';
import axios from 'axios';

/*Used in EmpLogin.js*/
const EmpLogin = () => {
    const[data, setData] = useState({
        Username:"",
        Password:""
    });
    const[error, setError] = useState("");


    const handleChange = ({currentTarget: input }) => {
        setData({...data, [input.name]: input.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:5001/api/auth";
            const {data: res} = await axios.post(url, data);
            //TODO: Change this to Session storage - not sure where we grab this
            sessionStorage.setItem("token", res.data);
            window.location= "login/emp";
            sessionStorage.setItem("auth", true);
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message);
            }

        }

    }
    return (
        <div className="empLoginDiv ">
                <form onSubmit={handleSubmit}>
                        <h1>Employee Login</h1>
                        <input
                            type="text"
                            className="textboxStyle"
                            placeholder='Username'
                            name='Username'
                            onChange={handleChange}
                            value={data.Username}
                            required
                        /> <br></br>
                        <input
                            type="password"
                            className="textboxStyle"
                            placeholder='Password'
                            name='Password'
                            onChange={handleChange}
                            value={data.Password}
                            required
                        /> <br></br>
                        {error && <div>{error}</div>}
                        <button type="submit">
                            Sign In
                        </button>
                    </form> 
               
        </div>

    );
};

export default EmpLogin;