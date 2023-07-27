import { useState, useEffect } from "react"
import { NavLink, useParams } from "react-router-dom"
import axios from "axios";
import servicesArray from "../../services.json"

const servicesPage = () => {

    const [services, setServices] = useState();
    let { id } = useParams()

    useEffect(() => {
        const getServices = async() => {
            const response = await axios.get(`http://127.0.0.1:8080/services/`)
            setServices(response.data.find((eve) => eve.name === id ))
        }
        console.log('got services')
        getServices()
    }, [id])

    if (!services) {
        return <div className="loading">Loading..</div>;
    }

    return(
        <div className='route-body'>
            <h1>Price List:</h1>
            <div className="services-list">
            <div className="service-name">{services.service}={services.price}</div>
            </div>
        <NavLink to="/" className="home-link">Home</NavLink>
        </div>
        
    )
}

export default servicesPage