import React from 'react'

export default function Plans() {
  return (
    <div className='py-[100px] px-2'>
        <div className='max-w-[1240px] mx-auto  md:grid grid-cols-3 gap-6'>
            <div className='shadow-2xl border my-2  h-[400px] hover:scale-105 duration-500'>
                <h1 className='font-bold  flex justify-center py-3 text-3xl'>Web development</h1>
                <span className='font-bold text-4xl flex justify-center py-3'>$149</span>
                <p className='font-bold flex justify-center py-3 px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores soluta cum explicabo id quo est non quos perferendis neque sit possimus natus commodi inventore at repellat, placeat asperiores facere aut.</p>
                <div className='flex justify-center'>
                <button className='bg-black
            text-white p-3 rounded hover:bg-pink-700 mt-5'>Get's started</button>
  
                </div>
            </div>
            <div className='shadow-2xl border my-2 h-[400px] bg-gray-200 hover:scale-105 duration-500'>
            <div className='shadow-2xl border my-2  h-[400px] hover:scale-105 duration-500'>
                <h1 className='font-bold  flex justify-center py-3 text-3xl'>Digital marketing</h1>
                <span className='font-bold text-4xl flex justify-center py-3'>$170</span>
                <p className='font-bold flex justify-center py-3 px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores soluta cum explicabo id quo est non quos perferendis neque sit possimus natus commodi inventore at repellat, placeat asperiores facere aut.</p>
                <div className='flex justify-center'>
                <button className='bg-black
            text-white p-3 rounded hover:bg-pink-700 mt-5'>Get's started</button>
  
                </div>
            </div>
            </div>
            
            <div className='shadow-2xl border my-2 h-[400px] hover:scale-105 duration-500'>
            <div className='shadow-2xl border my-2  h-[400px] hover:scale-105 duration-500'>
                <h1 className='font-bold  flex justify-center py-3 text-3xl'>App development</h1>
                <span className='font-bold text-4xl flex justify-center py-3'>$149</span>
                <p className='font-bold flex justify-center py-3 px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores soluta cum explicabo id quo est non quos perferendis neque sit possimus natus commodi inventore at repellat, placeat asperiores facere aut.</p>
                <div className='flex justify-center'>
                <button className='bg-black
            text-white p-3 rounded hover:bg-pink-700 mt-5'>Get's started</button>
  
                </div>
            </div>
            </div>

        </div>
    </div>
  )
}
