import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {Form} from 'react-bootstrap';

// this is used in Emplogin.js
const EmpSignup = () => {
    
    const[data, setData] = useState({
        Email:"",
        Username:"",
        Password:"",
        Location:""
    });
    const[error, setError] = useState("");
    const[location, setLocation] = useState([]);
    const[locs, setLocs] = useState([]);

    ///
    axios.get(`http://localhost:5001/location`, {
        params: {
            distinct: "true"
        }
    })
        .then(res => {
          const locationData = res.data;
          setLocation(locationData);
    
          const locationName = locationData.map((item) => item.Name);
          setLocs(locationName);
        });
    ///

    const navigate = useNavigate();

    const handleChange = ({currentTarget: input }) => {
        setData({...data, [input.name]: input.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:5001/api/emp";
            const {data: res} = await axios.post(url, data);
            setData({Email: "", Username: "", Password: "", Location: ""});
            setError("account successfully created!");
            
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message);
            }

        }

    }
    return (
        <div>
            <div>
                
                
                <div className="empLoginDiv">
                    <Form onSubmit={handleSubmit}>
                        <p className="robotoSlab">Create New Account</p>
                        <input
                            type="text"
                            placeholder='Username'
                            name='Username'
                            onChange={handleChange}
                            value={data.Username}
                            required
                        /><p>Username must be unique</p><br/><br/>
                        <input
                            type="email"
                            placeholder='Email'
                            name='Email'
                            onChange={handleChange}
                            value={data.Email}
                            required
                        /><p>This will only be used to send password reset links</p><br/><br/>
                        <input
                            type="password"
                            placeholder='Password'
                            name='Password'
                            onChange={handleChange}
                            value={data.Password}
                            required
                        /><p>Password must contain
                            <ul>
                                <li>An uppercase letter</li>
                                <li>A lowercase letter</li>
                                <li>A special character i.e. _ @ "</li>
                                <li>8-20 characters</li>
                            </ul>
                            </p><br/><br/>
                        <select
                            placeholder='Location'
                            name='Location'
                            onChange={handleChange}
                            value={data.Location}
                            required>
                                {location.map((content, index) => 
                                    <option>{content}</option>
                                )}
                                <option>Admin</option>
                        </select>
                        <p>This determines the access restrictions for this account</p><br/><br/>
                        {error && <div>{error}</div>}
                        <button type="submit">
                            Register User
                        </button>
                    </Form>
                    

                </div>
            </div>
        </div>

    );
};

export default EmpSignup;