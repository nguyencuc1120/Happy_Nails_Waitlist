import { useContext, useState, useEffect } from "react"
import AxiosContext from "../AxiosContext";
import axios from 'axios'

const AdminWaitlistCreate = () => {

    const [waitcreate, setWaitCreate] = useState();

    useEffect(() => {
        const getWait = async () => {
            const response = await axios.get(`http://127.0.0.1:8080/waiting2`)
            setWaitCreate(response.data)
        }
        console.log('got waitlist')
        getWait()
    },[])

    const initialState = {
        "id": '',
        "name": '',
        "service":'',
    }

    const { setAxiosAction }  = useContext(AxiosContext)
    const [formState, setFormState] = useState(initialState)

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.id]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formState);

        await axios.put(`http://127.0.0.1:8080/waiting2/`, formState);

        setFormState(initialState);
        setAxiosAction(true)
    };

    if (!waitcreate) { return <div className='admin-create'>Loading...</div> }

    return (
        <div className="admin-create">
            <form onSubmit={handleSubmit}>
                <div>Join Waitlist:</div>
                <div>Name:</div>
                <select onChange={handleChange} id="id" value={formState.id}>
                    <option value=""> - - Select Service - - </option>
                    {services.map((ven) => (
                        <option key={ven.id} value={ven.id}>{ven.name}</option>
                    ))}
                </select>
                <div>Name:</div>
                <input type="text" id="name" onChange={handleChange} value={formState.name}/>
                <div>Service:</div>
                <input type="date" id="date" onChange={handleChange} value={formState.service}/>
                <button className="event-submit" type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default AdminWaitlistCreate