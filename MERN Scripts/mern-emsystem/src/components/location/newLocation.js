import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const newLocation = () => {
    const[data, setData] = useState({
        id: "",
        name: "",
        address: "",
        stock: "",
        open: ""
    })
    const[error, setError] = useState("");

    const handleChange = ({currentTarget: input }) => {
        setData({...data, [input.name]: input.value});
    }
    const handleSubmit = async (e) => {
        
        e.preventDefault();
        try {
            //need to set up this url correctly
            const url = "http://localhost:5001/newLocation";
            const {data: res} = await axios.post(url, data);
            setError("location successfully created!");
            console.log(res.message);
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message);
            }

        }

    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                   type="text"
                   placeholder='Location Name'
                   name="name"
                   onChange={handleChange}
                   value={data.name}
                   required
                   />
                <input
                   type="text"
                   placeholder='Location Name'
                   name="adress"
                   onChange={handleChange}
                   value={data.address}
                   required
                   />
            </form>
        </div>
    )

}
export default newLocation;