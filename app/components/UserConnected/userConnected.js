import React from 'react'
import Sidebar from '../Sidebar/sidebar'
import RightBar from '../rightBar/rightBar'

const Userconnected = () => {
  return (
    <div className='flex w-[100%] '>
      <Sidebar className='flex text-black'/>
      <RightBar/>
    </div>
  )
}

export default Userconnected