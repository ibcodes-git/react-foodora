import React from 'react'

const Cards = () => {
  return (
    <div className='max-w-[1640px]  mx-auto px-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* Cards */}
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl md:3xl px-4 pt-8'>BuyOne GetOne's Out</p>
                <p className='px-4 font-semibold text-md'>Through 8/24</p>
                <button className='bg-white text-black mx-2 mt-4 absolute'>Order Now</button>
            </div>
            <img className='max-h-[180px] md:max-h-[250px] w-full object-cover rounded-xl' src='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=481&q=80' alt='' />
        </div>
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl md:3xl px-4 pt-8'>New recipes</p>
                <p className='px-4 font-semibold text-md'>Daily</p>
                <button className='bg-white text-black mx-2 mt-4 absolute'>Order Now</button>
            </div>
            <img className='max-h-[180px] md:max-h-[250px] w-full object-cover rounded-xl' src='https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80' alt='' />
        </div>
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl md:3xl px-4 pt-8'>Delivering healthy foods</p>
                <p className='px-4 font-semibold text-md'>Stay on point</p>
                <button className='bg-white text-black mx-2 mt-4 absolute'>Order Now</button>
            </div>
            <img className='max-h-[180px] md:max-h-[250px] w-full object-cover rounded-xl' src='https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=410&q=80' alt='' />
        </div>
    </div>
  )
}

export default Cards