import { Outlet } from 'react-router-dom'
import Modal from './elements/Modal'
import Navbar from "./shared/Navbar"

const AppLayout = () => {
    return (
        <div className='container'>
            <Navbar/>
            <Outlet/>

            <Modal/>
        </div>
    )
}

export default AppLayout