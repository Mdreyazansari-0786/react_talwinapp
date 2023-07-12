import React from 'react'
import Typed from 'react-typed';

function Banner() {
  return (
    <div className='bg-[#2699fb] w-full py-[100px]'>
        <div className='max-w-[1240px] my-[100px] mx-auto text-center mt-4'>
            <div className='font-bold text-xl md:text-3xl mb-4'>
                Learn with Us
            </div>
            <h2 className='text-white font-bold text-3xl md:text-[80px] mb-4'>Grow with Us.</h2>
            <div className='text-white font-bold text-[30px] md:text-[40px] mb-4 '> Learn:-
            <Typed
                    strings={['Web development','Digital Marketing','Ethical hacking','Coding']}
                    typeSpeed={30}
                    loop={true}
                    backSpeed={40}
                />
                <br/>
        </div>
        <button className='bg-black
            text-white p-3 rounded hover:bg-pink-700  '>Get's started</button>


        </div>
       
    </div>
    
  )
}

export default Banner;