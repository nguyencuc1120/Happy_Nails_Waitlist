import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='nav-links'>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/pictures">Pictures</Link>
            <Link to="/waitlist">Waitlist</Link>
        </div>
    )
}

export default Nav