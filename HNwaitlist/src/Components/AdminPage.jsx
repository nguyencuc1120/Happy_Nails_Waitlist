import AdminWaitList from "./AdminWaitList";
import AdminWaitlistCreate from "./AdminWaitlistCreate";
import WaitingPage from './WaitingPage'


import AxiosContext from '../AxiosContext'

import { useState } from "react"

const AdminPage = () => {

    const [axiosAction, setAxiosAction] = useState(false)

    const [WaitingPage, setWaitingPage] = useState(false)


    return (
        <AxiosContext.Provider value={{ axiosAction, setAxiosAction}}>
            <div className='route-body'>
            <div className='admin-options'>
                    <button onClick={() => setWaitingPage(false)}>Waitlist</button>
                    <button onClick={() => setWaitingPage(true)}>Pictures</button>
                </div>
                <div className="admin-panel">
                    { WaitingPage ? (
                        <>
                            <div className='admin-page-title'>EVENTS</div>
                            <AdminWaitList />
                            <AdminWaitlistCreate />
                        </>
                    ) : (
                        <>
                            <div className='admin-page-title'>VENUES</div>
                            <AdminWaitList />
                            <AdminWaitlistCreate />
                        </>
                    )}
                </div>
            </div>
        </AxiosContext.Provider>
    )
}

export default AdminPage