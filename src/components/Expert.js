import React from 'react'
import laptop from  '../images/laptop.jpg';


export default function Expert() {
  return (
    <div className='max-w-[1240px] p-2 mx-auto md:grid grid-cols-3 '>
        <div className='col-span-1 md:w-[80%] inline'>
            <img src={laptop} alt="" />

        </div>
        <div className='  col-span-2 flex flex-col justify-center'>
            <h1 className='text-[#00df9a] font-bold m-2'>LEARN FROM EXPERTS</h1>
            <p className='m-2 text-justify'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptatum quis adipisci obcaecati aliquid officia explicabo perspiciatis odit sit ratione mollitia veritatis fuga officiis amet, molestias minima ipsum. Consequatur, deleniti.
            </p>
            <button className='w-[30%] inline bg-black 
            text-white p-3 rounded hover:bg-pink-700'>Get's started</button>

        </div>


    </div>
  )
}
