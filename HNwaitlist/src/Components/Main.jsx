// import React, { useState } from 'react';


// const Main = (props) => {

//     const [count, setCount] = useState(0);
//     return (
    
//         <div className="main">
        
//             <h2>Welcome to Happy Nails!</h2>
//             <button onClick={() => setCount((count) => count + 1)}> {count} ahead - Click to Join Waitlist </button> <br></br>
//             <button>View Wait list</button><br></br>
//             <button>View Services</button>
            
//         </div>
    
//     )
//  }
 
//  export default Main



import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import ServicesPage from './servicesPage'
import PicturesList from './picturesList'
// import Waitlist from './waitlist'

const Main = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
                <Route exact path='/services' element={<ServicesPage />} />
                <Route exact path='/pictures' element={<PicturesList />} />
                {/* <Route exact path='/waitlist' element={<Waitlist />} /> */}
        </Routes>
    )
}
export default Main