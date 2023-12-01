import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
function Login() {
    const nav = useNavigate()
    useEffect(() => {
        // OTPLESS callback function
        window.otpless = (otplessUser) => {
          // Handle OTPLESS user data here
          alert(JSON.stringify(otplessUser));
          console.log(otplessUser)
          console.log(otplessUser.email.name)
          console.log(otplessUser.email.email)
          console.log(otplessUser.mobile.number)
          localStorage.setItem('dataKey', JSON.stringify(otplessUser));
          nav('/profile')
        };
        
        // Include OTPLESS SDK script
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://otpless.com/auth.js';
        script.cid = 'JVU2OAIJ4TS5FD4FH94XJPBGSEFOJZ8N';
        document.getElementById('otpless-login-page').appendChild(script);
    
        // Cleanup function to remove the script on component unmount
        return () => {
          document.getElementById('otpless-login-page').removeChild(script);
        };
      }, []);
  return (
    <div>
         <h1>OTPLESS DEMO</h1>
         <div id="otpless-login-page"></div>
    </div>
  )
}

export default Login