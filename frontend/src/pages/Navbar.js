import React from 'react'
import { AiFillHome, AiOutlineUser } from 'react-icons/ai'
import { BiSolidAddToQueue } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'
import { Link } from 'react-router-dom'; // Make sure to import the Link component if you're using React Router

export default function Navbar() {
  return (
    <div className="w-auto h-16 bg-zinc-800">
        <ul className="flex justify-evenly items-center h-full">
            <li>
                <Link to='/' className='text-2xl text-white'>
                    <AiFillHome/>
                </Link>
            </li>
            <li>
                <Link to='/new-blog' className='text-2xl text-white '>
                    <BiSolidAddToQueue/>
                </Link>
            </li>
            <li>
                <Link to='/settings' className='text-2xl text-white '>
                    <FiSettings/>
                </Link>
            </li>
            <li>
                <Link to='/login' className='text-2xl text-white '>
                    <AiOutlineUser/>
                </Link>
            </li>
        </ul>
        
    </div>
  )
}
