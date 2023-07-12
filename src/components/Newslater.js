import React from 'react'

export default function Newslater() {
  return (
    <div className='bg-[#2699fb] p-4'>
        <div className='max-w-[1240px] mx-auto justify-between  md:flex py-40px'>
            <div className='m-2'>
                <h1 className='text-[20px] md:text-[40px] font-bold text-white'>Want to learns latest I.T Skills ?</h1>
                <span className='text-white'>
                    SignUp to our newslater and stay up to date.
                </span>

                
            </div>
            <div className='m-2'>
                <input type="text" className='p-3 mx-2 text-slate-700 sm:w-full rounded mb-2' placeholder='Enter Email'/>
                <button className='bg-black
            text-white p-3 rounded hover:bg-pink-700  '>Notify Me</button>
            <br/>
            <p className='text-white font-bold'>We care about the protection of your data.Read our <br /> Privacy Policy.</p>
            </div>

        </div>
    </div>
  )
}
