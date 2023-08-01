import { useState, useEffect } from "react"
import { NavLink, useParams } from "react-router-dom"
import WaitlistUpdate from "./WaitlistUpdate";
import axios from "axios";

const WaitingPage = (props) => {

    
    const [ waiting, setWaiting] = useState();
    const [ body, setBody] = useState();
    const [ name, setName] = useState();
    const [ service, setService] = useState();

    let { id } = useParams()

    const handleSubmit = async (e) => {
        e.preventDefault();
        // props.addWaiting(body);
        console.log(`${name}, ${service}`)
        // addWaiting(body)
        // setBody('');
        const newWaiting = await axios.post ('http://127.0.0.1:8000/waiting2/', {
            name:name,
            service:service
        })
        console.log(newWaiting);
        getWaiting()
     };

     const handleDelete = async (id) => {
        
        setBody('');
        try {
            console.log(id)
            await axios.delete(`http://127.0.0.1:8000/waiting2/${id}`, {
                name:name,
                service:service
            })

        } catch (error) {
            console.log(error);
        }
        console.log(`${name}, ${service}`)
        console.log(handleDelete);
        getWaiting()
    }

    const getWaiting = async() => {
        const response = await axios.get(`http://127.0.0.1:8000/waiting2/?format=json`)
        setWaiting(response.data)
        // .find((eve) => eve.name === id )
        // console.log(response.data)
    }
    // console.log('got waiting')


    useEffect(() => {
        
        getWaiting()

    }, [])




    const initialState = {
        id: '',
        name: '',
        service: '',
    }
    
    const [updateState, setUpdateState] = useState(initialState);

    const handleChange = (e) => {
        setUpdateState({...updateState, [e.target.id]: e.target.value})
        console.log(e.target.value)
        console.log(e.target.id)
    }

    const handleUpdate = async (id) => {
        // e.preventDefault();
        // setBody('');
        console.log(id)
        console.log(updateState)
        try {
            
            const response = await axios.put(`http://127.0.0.1:8000/waiting2/${id}`, {
                name:name,
                service:service
            })
            console.log(`${name},${service}`)
            console.log(response)
        } catch (error) {
            console.log(error);
        }
    }








    if (!waiting) {
        return <div className="loading">Loading..</div>;
    }

    return(
        <div className='route-body'>
            <h2>Join Our Waiting List:</h2>
            <form method="post" onSubmit={handleSubmit} onChange={(e) => setBody(e.target.value)}>
                    Name: <input name="name" onChange={(e) => setName(e.target.value)}/><br/><br/>
                    Service: <input name="service" onChange={(e) => setService(e.target.value)}/><br/><br/>
                    <button type="submit" onSubmit={handleSubmit}>Submit</button><br/><br/>
            </form>
            <h2>Current Waiting List:</h2>
            
            <div className="waiting-list">
            {waiting.map((data)=>{
                // console.log(data)
                return(
                    
                    <div key={data.id}>
                        <div className="service-name" value={body} name="body" onChange={(e) => setBody(e.target.value)}>({data.id}){data.name} for {data.service}<button className="btn-delete" onClick={() => handleDelete(data.id)}>Delete</button></div> 
                    
                    <div>
                    <form  className="wait-Form" value={updateState.service}> 
                    Name: <input id="name" onChange={handleChange} /><br/><br/>
                    Service: <input id="service" onChange={handleChange}  /><br/><br/>
                    <button type="submit"> Update </button><br/><br/>
                    </form>
                    </div>

                    {/* <div><WaitingEntry data={data} key={data.id} onSubmit={handleSubmit} /></div> */}
                    </div>
                    
                    
                )})}
                    

            </div><br/><br/>
        <NavLink to="/" className="home-link">Home</NavLink>
       </div>
        
        
    )}
    export default WaitingPage

    // onClick={handleUpdate} onSubmit={handleSubmit}