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
            //alert(res.data.toLowerCase());
            //sessionStorage.setItem("token", res.data);
            window.location= "login/emp";
            sessionStorage.setItem("auth", "true");
            sessionStorage.setItem("adminLocAccess", res.data.toLowerCase());

            //set the selected location on login

            if (res.data.toLowerCase()=== "admin") {
                sessionStorage.setItem("selectedLocation", "All");
            }else{
                //sessionStorage.setItem("selectedLocation", res.data.toLowerCase());
                sessionStorage.setItem("selectedLocation", res.data);

            }

            


            


        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message);
            }

        }

    }
    return (
        <div className="empLoginDiv">
                <form onSubmit={handleSubmit}>
                        <h1>Rotarian Volunteer Login</h1>
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