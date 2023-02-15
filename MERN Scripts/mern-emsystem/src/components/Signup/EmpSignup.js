import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

// this is used in Emplogin.js
const EmpSignup = () => {
    const[data, setData] = useState({
        Email:"",
        Username:"",
        Password:"",
        Location:""
    });
    const[error, setError] = useState("");

    const navigate = useNavigate();

    const handleChange = ({currentTarget: input }) => {
        setData({...data, [input.name]: input.value});
    }

    const handleSubmit = async (e) => {
        
        e.preventDefault();
        try {
            const url = "http://localhost:5001/api/emp";
            const {data: res} = await axios.post(url, data);
            setError("account successfully created!");
            console.log(res.message);
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
                        <h1>Create Account</h1>
                        <input
                            type="text"
                            placeholder='Username'
                            name='Username'
                            onChange={handleChange}
                            value={data.Username}
                            required
                        />
                        <input
                            type="email"
                            placeholder='Email'
                            name='Email'
                            onChange={handleChange}
                            value={data.Email}
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
                        <input
                            type="text"
                            placeholder='Location'
                            name='Location'
                            onChange={handleChange}
                            value={data.Location}
                            required
                        />
                        {error && <div>{error}</div>}
                        <button type="submit">
                            Register User
                        </button>
                    </form>
                    

                </div>
            </div>
        </div>

    );
};

export default EmpSignup;