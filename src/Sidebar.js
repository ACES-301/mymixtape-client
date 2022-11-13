import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Sidebar.css'

function Sidebar() {
    return(
        <div className='container-fluid'>
             <div className='col-auto vh-100 bg-dark'>
                <ul>
                    <li>
                        <a href= "/" className='nav-link px-2'>
                            <i className= 'bi bi-house-door' /> <span className='ms-1 d-none d-sm-inline'>Home</span>
                        </a>
                    </li>
                    <li>
                        <a href= "/mymixtapes" className='nav-link px-2'>
                            <i className= 'bi-heart' /> <span className='ms-1 d-none d-sm-inline'>My Mixtapes</span>
                        </a>
                    </li>
                    <li>
                        <a href= "/profile" className='nav-link px-2'>
                            <i className= 'bi bi-person' /> <span className='ms-1 d-none d-sm-inline'>Profile</span>
                        </a>
                    </li>
                    <li>
                        <a href= "/about" className='nav-link px-2'>
                            <i className= 'bi bi-people' /> <span className='ms-1 d-none d-sm-inline'>About Us</span>
                        </a>
                    </li>
                </ul>
             </div>
        </div>

    )
}

export default Sidebar;

// used code from tutorial @ https://www.youtube.com/watch?v=tmbGaDCB2e8