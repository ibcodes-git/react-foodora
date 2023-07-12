import React, { useState } from 'react'
import { data } from '../data'

const Food = () => {
    const [foods, setFoods] = useState(data);

    const filterType = (category) => {
        setFoods(
            data.filter((item)=> {
                return item.category === category;
           })
        )
    };

    const filterPrice = (price) => {
        setFoods(
            data.filter((item)=>{
               return item.price === price;
           })
        )
    }

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='font-bold text-red-500 text-4xl text-center'>Top Rated Menu Items</h1>
        {/* Filter Row */}
        <div className='flex flex-col lg:flex-row justify-between'>
            {/* Filter Type */}
            <div>
                <p className='font-bold text-gray-700'>Filter Type</p>
                <div className='flex flex-wrap max-w-[500px] w-full'>
                    <button onClick={() => setFoods(data)} className='m-1 border-red-500 text-red-500 hover:text-white hover:bg-red-500'>All</button>
                    <button onClick={() => filterType('burger')} className='m-1 border-red-500 text-red-500 hover:text-white hover:bg-red-500'>Burgers</button>
                    <button onClick={() => filterType('pizza')} className='m-1 border-red-500 text-red-500 hover:text-white hover:bg-red-500'>Pizza</button>
                    <button onClick={() => filterType('salad')} className='m-1 border-red-500 text-red-500 hover:text-white hover:bg-red-500'>Salads</button>
                    <button onClick={() => filterType('chicken')} className='m-1 border-red-500 text-red-500 hover:text-white hover:bg-red-500'>Chicken</button>
                </div>
            </div>

            {/* Filter Price */}
            <div>
                <p className='font-bold text-gray-700'>Filter Price</p>
                <div className='flex max-w-[390px] w-full'>
                    <button onClick={() =>filterPrice('1$')} className='m-1 border-red-500 text-red-500 hover:text-white hover:bg-red-500'>1$</button>
                    <button  onClick={() =>filterPrice('2$')}  className='m-1 border-red-500 text-red-500 hover:text-white hover:bg-red-500'>2$</button>
                    <button onClick={() =>filterPrice('3$')} className='m-1 border-red-500 text-red-500 hover:text-white hover:bg-red-500'>3$</button>
                    <button onClick={() =>filterPrice('4$')} className='m-1 border-red-500 text-red-500 hover:text-white hover:bg-red-500'>4$</button>
                </div>
            </div>

        </div>
        {/* Display data */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 pt-4'>
            {foods.map((item,index)=>(
                <div key={item.id} className='border shadow-lg rounded-lg hover:scale-105 duration-500 '>
                    <img src={item.image} alt={item.name} 
                    className='w-full h-[200px] object-cover rounded-t-lg' />
                    <div className='flex justify-between px-2 py-2 '>
                        <p className='font-bold'>{item.name}</p>
                        <p>
                            <span className='bg-red-500 text-white p-1 rounded-xl'>{item.price}</span>
                        </p>
                    </div>
                    
                </div>
            ))}
        </div>
    </div>
  )
};

export default Food