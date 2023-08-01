import { useState, useEffect } from "react"
import { NavLink, useParams } from "react-router-dom"
import axios from "axios";


const Comments2Page = () => {

  




    const [ body, setBody] = useState();
    const [ waiting2_id, setwaiting2_id] = useState();
    const [ notes, setNotes] = useState();

    const initialState = {
        waiting2_id: '',
        notes: '',
    }
    const [updateState, setUpdateState] = useState(initialState);

    const handleChange = (e) => {
        setUpdateState({...updateState, [e.target.id]: e.target.value})
        console.log(e.target.value)
        console.log(e.target.id)
    }
     const handleUpdate = async (e) => {
        e.preventDefault();
        // props.addWaiting(body);
        console.log(`${waiting2_id}, ${notes}`)
        // addWaiting(body)
        setBody('');
        const element = document.querySelector('#put-request-error-handling .date-updated');
        const newCmt = await axios.put ('http://127.0.0.1:8000/comments2/${id}', {
            waiting2_id: waiting2_id,
            notes: notes,
        })
        .then(response => element.innerHTML = response.data.updatedAt )
        console.log(newCmt);
        getComments2()
     };
     
    
    



     const [comments2, setComments2] = useState();
     let { id } = useParams()
 
     useEffect(() => { 
        
      
         const getComments2 = async() => {
             const response = await axios.get(`http://127.0.0.1:8000/comments2/`)
             setComments2(response.data)
             // .find((eve) => eve.name === id )
             console.log(response.data)
         }
         console.log('got comments2')
         getComments2()
     }, [])








    if (!comments2) {
        return <div className="loading">Loading..</div>;
    }

    return(
        <div className='route-body'>
            <h1>Comments:</h1>
            <form method="post" onSubmit={handleUpdate} onChange={(e) => setBody(e.target.value)}>
                    #: <input name="waiting2_id" onChange={(e) => setwaiting2_id(e.target.waiting2_id)}/><br/><br/>
                    notes: <input name="notes" onChange={(e) => setNotes(e.target.notes)}/><br/><br/>
                    <button type="submit" onSubmit={handleChange}>Submit</button><br/><br/>
            </form>




            <div className="comments2-list">
            {comments2.map((data)=>(
                    <div className="service-name">{data.waiting2_id} notes: {data.notes}</div>
                ))}
        
            </div>
        <NavLink to="/" className="home-link">Home</NavLink>
        </div>
        
    )
}

export default Comments2Page