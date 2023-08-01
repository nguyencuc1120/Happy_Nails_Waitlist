import { NavLink } from 'react-router-dom';
import { useState } from 'react'

const Home = (props) => {

    const [count, setCount] = useState(0);
    return (
    
        <div className="home">
            {/* <img src="public/logo.PNG" className='homepic'/>  */}
            
            <h2>Welcome to Happy Nails!</h2>
            {/* <button className="homebtn" onClick={() => setCount((count) => count + 1)}> {count} ahead - Click to Join Waitlist </button> <br></br> */}
            <NavLink to="login">Login</NavLink><br></br>
            <NavLink to="waiting2">View Waiting List</NavLink><br></br>
            <NavLink to="comments2">View Comments</NavLink><br></br>
            <NavLink to="services">Services</NavLink><br></br>
            <NavLink to="pictures">Pictures</NavLink>
                
            
        </div>

    )
 }
 
 export default Home