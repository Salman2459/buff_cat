import React from 'react'
import Sidebar from '../components/Sidebar/sidebar'
import Navbar from '../components/UserConnectedNavbar/Navbar'

const Pointsystem = () => {
  return (
    <div>
      <div className='flex w-[100%] '>
        <Sidebar className='flex text-black' />
        <div className="w-full xl:w-[82%] absolute right-0">
          <Navbar />
          <div className='bg-[#170A05] min-h-[100vh] w-full pt-6 px-5'>
            some
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pointsystem