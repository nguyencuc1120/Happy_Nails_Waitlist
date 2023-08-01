import axios from "axios";
import { useEffect, useState, useContext } from "react"
import AxiosContext from "../AxiosContext";


const AdminWaitingList = () => {

    const [waiting, setWaiting] = useState();
    
    const { axiosAction, setAxiosAction }  = useContext(AxiosContext)

    useEffect(() => {
        const getWaitlist = async () => {
            const response = await axios.get(`http://127.0.0.1:8080/waiting2/`)
            setWaiting(response.data)
        }
        console.log('got waitlist')
        getWaitlist()
    },[axiosAction])

    useEffect(() => {
        setAxiosAction(false)
    },[waiting])


    const handleDelete = async(id) => {
        try {
            console.log(id)
            await axios.delete(
                `http://127.0.0.1:8080/waiting2/${id}`
            );
            setAxiosAction(true)
        } catch (error) {
            console.log(error);
        }
    }

    if (!waiting) {
        return (
                <div className="loading">Loading...</div>
        )
    }
    
    return (
        <div className="admin-list">
           {waiting.map((data) => (
                    <div key={data.id}>
                        <div>{data.name}</div>
                        <AdminEventUpdate id={data.id} service={data.service} name={data.name} />
                        <button onClick={() => handleDelete(data.id)}>Delete</button>
                        <NavLink to="/" className="home-link">Home</NavLink>
                    </div>
                ))}
        </div>
    )
}

export default AdminWaitingList