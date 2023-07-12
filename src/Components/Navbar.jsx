import React,{useState} from 'react';
import {AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag}  from 'react-icons/ai';
import {BsFillCartFill, BsFillSaveFill} from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb';
import {MdFavorite ,MdHelp} from 'react-icons/md'
import {FaWallet, FaUserFriends} from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false);

     const handleNav = () => {
        setNav(!nav);
    };

  return (
    <div className=' max-w-[1640px]   flex justify-between items-center mx-auto p-4 '>
        {/* Left Side */}
        <div className='flex items-center'> 
            <div onClick={handleNav} className='cursor-pointer' >
                <AiOutlineMenu size={30} />
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
                Best <span className='font-bold'>Eats</span>
            </h1>
            <div className='hidden lg:flex items-center bg-gray-300 rounded-full p-1 text-[16px]'>
                <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                <p className='p-2'>Pickup</p>
            </div>
        </div>
        {/* Search Input */}
        <div className='flex items-center bg-gray-300 rounded-full px-2 w-[200px] sm:w-[350px] lg:w-[450px]'>
            <AiOutlineSearch size={30} />
            <input className='bg-transparent p-2 focus:outline-none w-full' type='text' placeholder='Search food' />
        </div>
        {/* Cart button */}
        <div>
        <button className=' hidden bg-black text-white md:flex items-center py-2 rounded-full'>
            <BsFillCartFill size={30} className='mr-2' />Cart
        </button>
        </div>

    {/* Mobile Menu */}
    {/* Overlay */}
    {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
        
        {/* Side Drawer Menu */}
        <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
            <AiOutlineClose onClick={handleNav} size={30} className='absolute right-4 top-4 cursor-pointer' />
            <h2 className='text-2xl p-4'>
                Best <span className='font-bold'>Eats</span>
            </h2>
            <nav>
                <ul className='flex flex-col p-4 text-gray-800'>
                    <li className='text-xl flex py-4'><TbTruckDelivery size={25} className='mx-4' />Orders</li>
                    <li className='text-xl flex py-4'><MdFavorite size={25} className='mx-4' />Favourites</li>
                    <li className='text-xl flex py-4'><FaWallet size={25} className='mx-4' />Wallet</li>
                    <li className='text-xl flex py-4'><MdHelp size={25} className='mx-4' />Help</li>
                    <li className='text-xl flex py-4'><AiFillTag size={25} className='mx-4' />Promotions</li>
                    <li className='text-xl flex py-4'><BsFillSaveFill size={25} className='mx-4' />Best Ones</li>
                    <li className='text-xl flex py-4'><FaUserFriends size={25} className='mx-4' />Invite Friends</li>
                    
                </ul>
            </nav>
        </div>
    

    </div>
  )
}

export default Navbar