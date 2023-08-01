import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react'

const Login = () => {

    const admins = [
        {
            username: 'admin1',
            password: 'password1',
        },
        {
            username: 'admin2',
            password: 'password2',
        },
        {
            username: 'admin3',
            password: 'password3',
        },
    ]

    const default_input = {
        username: '',
        password: '',
    }
    
    const [buttonStatus, setButtonStatus] = useState(true);
    const [formState, setFormState] = useState(default_input)
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormState({...formState, [e.target.id]: e.target.value})
    }

    useEffect(() => {
        if (admins.find(admin => admin.username === formState.username && admin.password === formState.password)) {
            setButtonStatus(false)
        } else {
            setButtonStatus(true)
            console.log(formState.username)
            console.log(formState.password)
        }
    },[formState])

    return (
        <div className='route-body' >
            <label htmlFor='username'>Username:</label>
            <input id='username' type='text' onChange={handleChange} value={formState.username}/>
           
            <label htmlFor='password'>Password:</label>
            <input id='password' type='password' onChange={handleChange} value={formState.password}/>
            
            <button disabled={buttonStatus} onClick={() => navigate('/')}>Login</button>
            
        </div>
    )
}
export default Login



// import { Link } from 'react-router-dom'

// import { useContext, useEffect, useState } from 'react'
// import axios from 'axios'
// export default function LoginPage(){
//     const [usernameFormState, setUsernameFormState] = useState('')
//     const [passwordFormState, setPasswordFormState] = useState('')
//     const [userInfo, setUserInfo] = useState({
//         username: '',
//         password: ''
//     })

//     const usernameHandleChange = (event) => {
//         setUsernameFormState(event.target.value)
//         console.log(usernameFormState)
//     }

//     const passwordHandleChange = (event) => {
//         setPasswordFormState(event.target.value)
//         console.log(passwordFormState)
//     }

//     useEffect(()=>{
//         setUserInfo({
//             username: usernameFormState,
//             password: passwordFormState
//         })
//     },[usernameFormState,passwordFormState])
//     const { vertUsername,setVertUsername,vertId,setVertId } = useContext(UserContext)
//     const handleSubmit = async(event) => {
//         event.preventDefault()
//         const response = await axios.get(`http://localhost:3001/api/userinfo`)
//         const checkIfRealAccount = async() => {
//             for (let i = 0;i<response.data.users.length;i++){
//                 if (userInfo.password == response.data.users[i].password && userInfo.username == response.data.users[i].username){
//                     const putRequest = await axios.put(`http://localhost:3001/api/userinfo/loginpage/${response.data.users[i]._id}`, {...userInfo, isLoggedIn: true})
//                     alert(`Hello ${response.data.users[i].username}, you are logged in!`)
//                     setVertUsername(response.data.users[i].username)
//                     setVertId(response.data.users[i]._id)
//                     localStorage.setItem('userId', response.data.users[i]._id)
//                     localStorage.setItem('username', response.data.users[i].username)
//                     console.log(vertUsername)
//                     // location.reload()
//                 }  
//             }
//         }
//         checkIfRealAccount()
//     }
//     return(
//         <form onSubmit={handleSubmit} className='loginContainer logIn'>
//             <div className='loginContainerTwo'>
//                 <div>
//                     <h1 className='headinglogin'>Log In</h1>
//                     <p>New to this site? <Link to='/signup'>Sign up</Link></p>
//                 </div>
//                 <div className='loginInputbu'>
//                     <input className='logInInput' onChange={usernameHandleChange} type="text" placeholder='Username'/>
//                     <input className='logInInput' onChange={passwordHandleChange} type="text" placeholder='Password' />
//                 </div>
//                  <div className='loginTwoButton'>
//                     <button className='logInSubmit' type="submit">Log In</button>
//                  </div>
//             </div>
//         </form>
//     )
// }