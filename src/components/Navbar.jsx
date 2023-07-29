import React, {useContext} from 'react'
import {NavLink} from 'react-router-dom'
import { ShoopingCartContext } from '../context/Context'

function Navbar() {
  const context = useContext(ShoopingCartContext)
  const activeStyle = 'underline'

  return (
    <nav className='flex justify-between top-0 items-center fixed z-10 w-full py-5 px-8 text-sm font-light bg-black text-white'>
        <ul className='flex items-center gap-3'>
          <li className='font-semibold text-lg'>
              <NavLink to='/' className={
                ({isActive})=> isActive ? activeStyle:undefined
              }>Shopping</NavLink>
          </li>
          <li>
              <NavLink to='/all' className={
                ({isActive})=> isActive ? activeStyle:undefined
              }>All</NavLink>
          </li>
          <li>
              <NavLink to='/clothes' className={
                ({isActive})=> isActive ? activeStyle:undefined
              }>Clothes</NavLink>
          </li>
          <li>
              <NavLink to='/electronics' className={
                ({isActive})=> isActive ? activeStyle:undefined
              }>Electronics</NavLink>
          </li>
          <li>
              <NavLink to='/games' className={
                ({isActive})=> isActive ? activeStyle:undefined
              }>Games</NavLink>
          </li>
          <li>
              <NavLink to='/books' className={
                ({isActive})=> isActive ? activeStyle:undefined
              }>Books</NavLink>
          </li>
        </ul>
        <ul className='flex items-center gap-3'>
            <li className='text-black/80'>
            @Luis3Fernando_C
            </li>
            <li>
              <NavLink to='/my-account' className={
                ({isActive})=> isActive ? activeStyle:undefined
              }>My Account</NavLink>
            </li>
            <li>
              <NavLink to='/order' className={
                ({isActive})=> isActive ? activeStyle:undefined
              }>Order</NavLink>
            </li>
            <li>
              <NavLink to='/orders' className={
                ({isActive})=> isActive ? activeStyle:undefined
              }>Orders</NavLink>
            </li>
            <li>
              <NavLink to='/signin' className={
                ({isActive})=> isActive ? activeStyle:undefined
              }>Signin</NavLink>
            </li>
            <li>
                🛒 {context.count}
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
