import React, { useState } from "react";
import App from './App'
import { GoogleLogin } from "react-google-login";
import './Login.css'
import {Link} from 'react-router-dom'
function Login() {
  const [isLog, setLog] = useState(false);
  const [user,setUser]=useState('')
  const [imageUrl,setImageUrl]=useState('')
  const responseGoogle = (response) => {
    setLog(true);
    setUser(response.profileObj.givenName)
    setImageUrl(response.profileObj.imageUrl)
   
  };

  return (isLog ? 
    <App user={user} imageUrl={imageUrl} setLog={setLog}/>
   : (
    <div className="body">
    <div className="google">
      <h3 style={{fontWeight:'700',fontSize:"35px",marginBottom:"15px"}}>Welcome to Invoice Tracker</h3>
      <br/>
      <GoogleLogin
        clientId="1059274321677-pcpcptlm82h06ks1gi3944sbi4djnp4l.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
       <a style={{fontSize:'13px',marginTop:'14px'}} href="https://accounts.google.com/signup/v2/webcreateaccount?hl=en&flowName=GlifWebSignIn&flowEntry=SignUp">Dont have Google account? Click here</a>
    </div>
   
    </div>
    )
  );
}

export default Login;
