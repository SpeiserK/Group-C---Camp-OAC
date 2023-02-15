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
            localStorage.setItem("token", res.data);
            window.location= "login/emp";
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message);
            }

        }

    }
    return (
        <div>
            <div>
                <div>
                <form onSubmit={handleSubmit}>
                        <h1>Employee Login</h1>
                        <input
                            type="text"
                            placeholder='Username'
                            name='Username'
                            onChange={handleChange}
                            value={data.Username}
                            required
                        />
                        <input
                            type="password"
                            placeholder='Password'
                            name='Password'
                            onChange={handleChange}
                            value={data.Password}
                            required
                        />
                        {error && <div>{error}</div>}
                        <button type="submit">
                            Sign In
                        </button>
                    </form> 
                </div>
                
                
            </div>
        </div>

    );
};

export default EmpLogin;