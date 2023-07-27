import { useState, useEffect } from "react"
import { NavLink, useParams } from "react-router-dom"
import axios from "axios";
import servicesArray from "../../services.json"

const PicturesPage = (props) => {

    const [pictures, setPictures] = useState();
    let { id } = useParams()

    useEffect(() => {
        const getPictures = async() => {
            const response = await axios.get(`http://127.0.0.1:8080/pictures/`)
            setPictures(response.data.find((eve) => eve.name === id ))
        }
        console.log('got pictures')
        getPictures()
    }, [])

    if (!pictures) {
        return <div className="loading">Loading..</div>;
    }

    return(
        <div className='route-body'>
            <h1>Nail Art:</h1>
            <div className="pictures-list">
                <img src={pictures.photo_url} height='500px' width='500px'/>
            </div>
        <NavLink to="/" className="home-link">Home</NavLink>
        </div>
        
    )
}

export default PicturesPage