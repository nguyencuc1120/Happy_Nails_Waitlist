import { NavLink } from 'react-router-dom';
import { useState } from 'react'

const Home = (props) => {

    const [count, setCount] = useState(0);
    return (
    
        <div className="home">
            {/* <img src="public/logo.PNG" className='homepic'/>  */}
            
            <h2>Welcome to Happy Nails!</h2>
            <button onClick={() => setCount((count) => count + 1)}> {count} ahead - Click to Join Waitlist </button> <br></br>
            {/* <button>View Wait list</button><br></br>
            <button>View Services</button> */}

                <NavLink to="services">Services</NavLink><br></br>
                <NavLink to="pictures">Pictures</NavLink>
            
        </div>

// width="1650" height="980" alt=""
        // <div className="home-links">
        //     <NavLink to="services">Services</NavLink>
        //     <NaveLink to="pictures">Pictures</NaveLink>
        // </div>
    
    )
 }
 
 export default Home