const WaitingEntry({data, onSubmit}){
    const [list, newlist] = React.useState('')

    return(<>
    <WaitingList {...data} />

                    <form key={data.id} onSubmit={handleUpdate}> 
                    Name: <input id="name" onChange={handleChange} /><br/><br/>
                    Service: <input id="service" onChange={handleChange} value={updateState.service} /><br/><br/>
                    <button type="submit"> Update </button><br/><br/>
                    </form>
                    </>
}

                  





const AdminWaitUpdate = ({id, name, service}) => {

    const initialState = {
        "id": id,
        "name": name,
        "service": service,
    }
    
    const [updateState, setUpdateState] = useState(initialState);

    const handleChange = (e) => {
        setUpdateState({...updateState, [e.target.id]: e.target.value})
        console.log(e.target.value)
        console.log(e.target.id)
    }

    const handleUpdate = async () => {
        // e.preventDefault();
        setBody('');
        console.log(id)
        console.log(updateState)
        try {
            
            await axios.put(`http://127.0.0.1:8000/waiting2/${id}`, {
                ...updateState, 
                name:name,
                service:service
            })
            console.log(`${name},${service}`)
            setEditMode(false)
            setAxiosAction(true)

        } catch (error) {
            console.log(error);
        }
        AdminWaitUpdate()
    }

    return(
        <>
         <div>
                    <form key={data.id} onSubmit={handleUpdate} value={updateState.service}> 
                    Name: <input id="name" onChange={handleChange} /><br/><br/>
                    Service: <input id="service" onChange={handleChange}  /><br/><br/>
                    <button type="submit" onSubmit={handleSubmit} onClick={handleUpdate}> Update </button><br/><br/>
                    </form>
                    </div>
        </>
    )



}