import React from 'react'

const Login = () => {
  return (
    <div>
        <img src="Logo.png" alt="" /><br /><br /><br /><br /><br /><br /><br />
        <h1>Welcome Back!</h1>
        <p>If you have an account, please log in with your email address</p>
        <label htmlFor="username">USERNAME</label><br />
        <input type="text" name='username' placeholder='Enter your username here'/><br />
        <label htmlFor="password">PASSWORD</label><br />
        <input type="password" name='password' placeholder='Enter your password here'/><br />
        <button type="submit">Login</button>
        <p><u>Did you forget your password?</u></p>
        <br /><br /><br /><br /><br /><br />
        <hr />
        <p>Don’t have an account? Sign Up</p>
    </div>
  )
}

export default Login
