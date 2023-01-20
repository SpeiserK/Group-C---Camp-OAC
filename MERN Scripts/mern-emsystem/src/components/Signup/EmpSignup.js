import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import styles from './styles.EmpSignup.css';

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
            const url = "http://localhost:5000/api/emp";
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
        <div className={styles.signup_container}>
            <div className={styles.signup_form_container}>
                
                
                <div className={styles.right}>
                    <form className={styles.form_container} onSubmit={handleSubmit}>
                        <h1>Create Account</h1>
                        <input
                            type="text"
                            placeholder='Username'
                            name='Username'
                            onChange={handleChange}
                            value={data.Username}
                            required
                            className={styles.input}
                        />
                        <input
                            type="email"
                            placeholder='Email'
                            name='Email'
                            onChange={handleChange}
                            value={data.Email}
                            required
                            className={styles.input}
                        />
                        <input
                            type="password"
                            placeholder='Password'
                            name='Password'
                            onChange={handleChange}
                            value={data.Password}
                            required
                            className={styles.input}
                        />
                        <input
                            type="text"
                            placeholder='Location'
                            name='Location'
                            onChange={handleChange}
                            value={data.Location}
                            required
                            className={styles.input}
                        />
                        {error && <div className={styles.error_msg}>{error}</div>}
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