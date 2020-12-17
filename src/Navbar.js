import { Avatar } from '@material-ui/core'
import { GoogleLogout } from "react-google-login";
import React from 'react'
import './Navbar.css'
function Navbar({user,imageUrl,setLog}) {
    const logout=()=>{
        setLog(false)
    }
    return (
        <div>
            <div className="navbar">
                
    <h3 style={{display:'flex'}}>WELCOME {user.toUpperCase()}&nbsp;&nbsp; <span><Avatar src={imageUrl}/></span></h3>
            
                <h3 style={{position:'relative',left:'-80px'}}>INVOICE TRACKER</h3>
                <GoogleLogout className="logout" buttonText='Logout'  clientId="1059274321677-pcpcptlm82h06ks1gi3944sbi4djnp4l.apps.googleusercontent.com"
                 onLogoutSuccess={logout}></GoogleLogout>
            </div>
        </div>
    )
}

export default Navbar
