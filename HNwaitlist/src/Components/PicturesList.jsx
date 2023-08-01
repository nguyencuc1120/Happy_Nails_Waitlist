import { useState, useEffect } from "react"
import { NavLink, useParams } from "react-router-dom"
import axios from "axios";
import servicesArray from "../../services.json"

const PicturesPage = () => {

    const [pictures, setPictures] = useState();
    let { id } = useParams()

    useEffect(() => {
        const getPictures = async() => {
            const response= await axios.get(`http://127.0.0.1:8000/pictures/`)
            setPictures(response.data)
            // setData(response)
            // .find((eve) => eve.name === id )
            console.log(response.data)
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
                
                {pictures.map((photo)=>(
                    <img className="pictures" src={photo.photo_url} height='400px' width='400px'/>
                ))}
            </div>
        <NavLink to="/" className="home-link">Home</NavLink>
        </div>
        
    )
}

export default PicturesPage