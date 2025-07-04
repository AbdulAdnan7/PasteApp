import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-center mt-2 gap-6'>
        <NavLink to='/' className={({isActive}) => isActive ? 'text-green-600' : ''} >
            Home
        </NavLink>
        <NavLink to='/pastes'  className={({isActive}) => isActive ? 'text-green-600' : ''} >
            Pastes
            </NavLink>      
    </div>
  )
}

export default Navbar
