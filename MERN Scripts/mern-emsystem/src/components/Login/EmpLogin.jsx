import {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import styles from './styles.EmpLogin.css';

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
            const url = "http://localhost:5000/api/auth";
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
        <div className={styles.login_container}>
            <div className={styles.login_form_container}>
                <div className={styles.left}>
                <form className={styles.form_container} onSubmit={handleSubmit}>
                        <h1>Employee Login</h1>
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
                            type="password"
                            placeholder='Password'
                            name='Password'
                            onChange={handleChange}
                            value={data.Password}
                            required
                            className={styles.input}
                        />
                        {error && <div className={styles.error_msg}>{error}</div>}
                        <button type="submit" className={styles.green_btn}>
                            Sign In
                        </button>
                    </form> 
                </div>
                
                <div className={styles.right}>
                
                    
                    

                </div>
            </div>
        </div>

    );
};

export default EmpLogin;