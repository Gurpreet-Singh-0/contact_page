import React from 'react'
import Logo from "../assets/Logo.png"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div className="flex justify-between items-center">
        <img src={Logo} className='ml-2' alt="" />
        <div className='flex space-x-4 mr-6 font-semibold'>
            <Link to="#">Home</Link>
            <Link to="#">About</Link>
            <Link to="#">Contact</Link>
            
        </div>
    </div>
    </>
  )
}

export default Navbar