import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const NewLocation = () => {
    const[data, setData] = useState({
        name: "",
        address: "",
        stock: 0,
        open: false
    })
    const[error, setError] = useState("");

    const handleChange = ({currentTarget: input }) => {
        setData({...data, [input.name]: input.value});
    }
    const handleSubmit = async (e) => {
        
        e.preventDefault();
        try {
            
            const url = "http://localhost:5001/newLocation";
            const {data: res} = await axios.post(url, data);
            setError("location successfully created!");
            console.log(res.message);
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message);
            }

        }
        window.location.reload();

    }
    return(
        <div className='newLocation'>
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
                   placeholder='Address'
                   name="address"
                   onChange={handleChange}
                   value={data.address}
                   required
                   />
                   <button type="submit">
                            Create Location
                    </button>
            </form>
        </div>
    )

}
export default NewLocation;
