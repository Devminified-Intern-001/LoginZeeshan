import React from 'react'
import LoginPhoto from '../components/loginSidePhoto'
import './index.css'
const Layout = (props) => {
  const {children}=props
  console.log(props)
  return (
    <div className='main'>
      <div className='photoaside'>
      <LoginPhoto/>
      </div>  
      <div className='logincomponent'>{children}</div>
    </div>
  )
}

export default Layout
