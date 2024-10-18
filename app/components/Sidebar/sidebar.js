'use client'
import React, { useState, useRef } from 'react'
import './sidebar.css'

const Sidebar = () => {

    let [activeSection, setactiveSection] = useState('userActivity')
    let [navOpen, setnavOpen] = useState(true)
    let sideBar = useRef()
    let sideBarNavs = useRef()

    function showsideNav() {
        sideBar.current.classList.toggle('responsiveSideBar')
        sideBarNavs.current.classList.toggle('responsiveSideBarNav')

        if (navOpen) {
            setnavOpen(false)
        } else {
            setnavOpen(true)
        }
    }

    return (
        <div>
            <div className='w-[300px] h-[100vh] bg-[#31231F] sideBar' ref={sideBar}>

                {navOpen == true ? <button className='sideNav text-white' onClick={showsideNav}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>
                </button> : <button className='sideNav text-white' onClick={showsideNav}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                    </svg>
                </button>}

                <div className='flex items-center pr-5'>
                    <img src='./mainLogo.png' className='w-[50px] h-[50px] ml-12  mt-5' />
                    <h1 className='text-white ml-2 mt-5 font-bold text-[1.1em]'>Buff OP_CAT</h1>
                </div>

                <ol className='text-white flex flex-col justify-center font-medium text-[1.2em] mt-10 sideBarNavs  cursor-pointer' ref={sideBarNavs}>
                    <li className={activeSection == 'userActivity' ? 'py-3 pl-12 border-r-[6px] border-[#F3933F]  bg-[#1A0B06]' : 'py-3 pl-12'}>User Activity</li>
                    <li className='py-3 pl-12'>Point System</li>
                    <li className='py-3 pl-12'>Fee Structure</li>
                    <li className='py-3 pl-12'>CEXS</li>
                    <li className='py-3 pl-12'>Educational Resources</li>
                    <li className='py-3 pl-12'>VS Tab</li>
                </ol>
            </div>
        </div>
    )
}

export default Sidebar