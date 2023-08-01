import { useContext, useState, useEffect } from "react"
import AxiosContext from "../AxiosContext";
import axios from 'axios'

const WaitlistUpdate = ({id, name, service}) => {

    const initialState = {
        "id": id,
        "name": name,
        "service": service,
    }

    const [updateState, setUpdateState] = useState(initialState);
    const [editMode, setEditMode] = useState(false);
    const { setAxiosAction } = useContext(AxiosContext)

    const handleChange = (e) => {
        setUpdateState({...updateState, [e.target.id]: e.target.value})
        console.log(e.target.value)
        console.log(e.target.id)
    }

    const handleUpdate = async () => {
        console.log(id)
        console.log(updateState)
        try {
            await axios.post(`http://127.0.0.1:8080/waiting2/`, updateState)

            console.log(updateState.field)

            setEditMode(false)
            setAxiosAction(true)
        } catch (error) {
            console.log(error);
        }
    }
    const handleClose = () => {
        setEditMode(false)
        setUpdateState(initialState)
    }


    if (!editMode) {
        return <button className='admin-edit-button' onClick={() => setEditMode(true)}>Edit</button>
    }

    return (
        <>
            <div className="edit-div">
                
                    <label>Name: </label>
                    <input type="text" id="name" onChange={handleChange} value={updateState.name}/>
                
                    <label>Service: </label>
                    <input type="text" id="service" onChange={handleChange} value={updateState.service}/>
                
                    <button className="update-button" onClick={handleUpdate}>Update</button>
                    <button onClick={handleClose}>Close</button>
            </div>
            
        </>
       
    )
}


export default WaitlistUpdate