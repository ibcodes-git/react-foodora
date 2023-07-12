import React from 'react'
import { categories } from '../data'

const Category = () => {
    console.log(categories);

  return (
    <div className='max-w-[1640px]  m-auto px-4 py-12'>
        <h1 className='font-bold text-red-500 text-4xl text-center'>Top Rated Menu Items</h1>

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
            {categories.map((item, index) =>(
                <div key={index} className='border shadow-lg bg-gray-100 items-center'>
                    <h2 className='font-bold sm:text-xl'>{item.name}</h2>
                    <img src={item.image} alt={item.name} 
                    className='w-20' />
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default Category