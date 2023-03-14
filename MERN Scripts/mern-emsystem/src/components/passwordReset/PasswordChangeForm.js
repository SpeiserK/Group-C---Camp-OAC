import {useState} from 'react';
import { useSearchParams } from "react-router-dom";
import axios from 'axios';

/*Used in EmpLogin.js*/
const PasswordChangeForm = () => {
    const[data, setData] = useState({
        password:""
    });
    const[error, setError] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();


    const handleChange = ({currentTarget: input }) => {
        setData({...data, [input.name]: input.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = `http://localhost:5001/api/pwresetauth?token=${searchParams.get("token")}&id=${searchParams.get("id")}`;
            const {data: res} = await axios.post(url, data);
            console.log(JSON.stringify(res));
            setError(res.message);
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message);
            }

        }

    }
    return (
        <div className="empLoginDiv ">
                <form onSubmit={handleSubmit}>
                        <h1>Reset password</h1>
                        <input
                            type="password"
                            className="textboxStyle"
                            placeholder='password'
                            name='password'
                            onChange={handleChange}
                            value={data.password}
                            required
                        /><br></br>
                        {error && <div>{error}</div>}
                        <button type="submit">
                            Change password
                        </button>
                    </form>
        </div>

    );
};

export default PasswordChangeForm;