import {AiOutlineMenu} from 'react-icons/ai';
import {AiOutlineCloseSquare} from 'react-icons/ai';
import React, { useState } from 'react'

export default function Header() {
    const [toggle,setToggle]=useState(false);
  return (
   <>
  <div className="bg-[#2699fb] p-4">
     <div className="max-w-[1240px] py-[20px] items-center  flex justify-between  mx-auto">
      <div className="text-3xl font-bold">
        Apna software solution

      </div>
      {
        toggle ?
            <AiOutlineMenu onClick={()=>setToggle(!toggle)} className="text-white text-2xl md:hidden block"/>
            :
            <AiOutlineCloseSquare onClick={()=>setToggle(!toggle)}  className="text-white text-2xl md:hidden block"/>

      }
      
      
      <ul className="hidden md:flex text-white gap-5">
        <li>
          Home
        </li>
        <li>
          Company
        </li>
        <li>
          Resources
        </li>
        <li>
          About
        </li>
        <li>
          Contact us
        </li>
      </ul>

     </div>

  </div>
  {/* responsive menu  */}
  <ul className={`duration-300 md:hidden  w-full h-screen text-white fixed bg-black  top-[92px] 
   ${toggle ? 'left-[0]' : 'left-[-100%]'}`
   }>
        <li className='p-3'>
          Home
        </li >
        <li className='p-3'>
          Company
        </li>
        <li className='p-3'>
          Resources
        </li>
        <li className='p-3'>
          About
        </li>
        <li className='p-3'>
          Contact us
        </li>
      </ul>

     

  
  

   
  </>
  )
}
