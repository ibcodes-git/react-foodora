import React from 'react'

const Intro = () => {
  return (
    <div className='max-w-[1640px]   mx-auto px-4 py-4'>
        <div className='max-h-[500px] relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 max-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-red-700'>Best</span></h1>
                <h1 className='px-4 text-4xl sm:5xl md:text-6xl lg:text-7xl font-bold'><span className='text-red-700'>Foods</span> Delivered</h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src='https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='Food' />
        </div>
    </div>
  )
}

export default Intro