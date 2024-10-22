'use client'
import React, { useState, useRef,useEffect } from 'react'
import './sidebar.css'
import { usePathname } from 'next/navigation'
import Link from 'next/link'


const Sidebar = () => {
    const activePage = usePathname()
    let [navOpen, setnavOpen] = useState(true)
    let sideBar = useRef()
    let sideBarData = useRef()
    let respBtn = useRef()

    function showsideNav() {
        sideBar?.current?.classList.toggle('responsiveSideBar')
        if (respBtn?.current?.classList.contains('sideNavbtn')) {
            respBtn?.current?.classList.add('openSideNavbtn')
            respBtn?.current?.classList.remove('sideNavbtn')
        } else {
            setTimeout(() => {
                respBtn?.current?.classList.remove('openSideNavbtn')
                respBtn?.current?.classList.add('sideNavbtn')
            }, 200);
        }
        if (!navOpen) {
            setnavOpen(true)
            sideBarData?.current?.classList.toggle('responsiveSideBarNav')
            return;
        }
        setnavOpen(false)
        setTimeout(() => {
            sideBarData?.current?.classList.toggle('responsiveSideBarNav')
        }, 200);
    }


    return (
        <>
            <div className='h-[100vh] fixed  bg-[#31231F] sideBar z-[999]' ref={sideBar}>
                {navOpen === true ? (
                    <button className='sideNavbtn text-white' ref={respBtn} onClick={showsideNav}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                        </svg>
                    </button>
                ) : (
                    <button className='sideNavbtn text-white' ref={respBtn} onClick={showsideNav}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                        </svg>
                    </button>
                )}

                <div className='smallSidebar' ref={sideBarData}>
                    <div className='flex items-center pr-5'>
                        <img src='/mainLogo.png' className='w-[50px] h-[50px] ml-12  mt-5' />
                        <h1 className='text-white ml-2 mt-5 font-bold text-[1.1em]'>Buff OP_CAT</h1>
                    </div>

                    <div className='text-white flex flex-col justify-center font-medium text-[1em] mt-10 sideBarNavs cursor-pointer'>
                        <Link className={activePage === '/Dashboard' ? 'py-3 pl-12 border-r-[6px] border-[#F3933F]  bg-[#1A0B06]' : 'py-3 pl-12'} href="/Dashboard">User Activity</Link>
                        <Link className={activePage === '/Dashboard/Pointsystem' ? 'py-3 pl-12 border-r-[6px] border-[#F3933F]  bg-[#1A0B06]' : 'py-3 pl-12'} href="/Dashboard/Pointsystem">Point System</Link>
                        <Link className={activePage === '/Dashboard/FeeStructure' ? 'py-3 pl-12 border-r-[6px] border-[#F3933F]  bg-[#1A0B06]' : 'py-3 pl-12'} href="/Dashboard/FeeStructure">Fee Structure</Link>
                        <Link className={activePage.includes('/Dashboard/CEXS') ? 'py-3 pl-12 border-r-[6px] border-[#F3933F]  bg-[#1A0B06]' : 'py-3 pl-12'} href="/Dashboard/CEXS">CEXS</Link>
                        <Link className={activePage === '/Dashboard/EducationResorces' ? 'py-3 pl-12 border-r-[6px] border-[#F3933F]  bg-[#1A0B06]' : 'py-3 pl-12'} href="/Dashboard/EducationResorces">Educational Resources</Link>
                        <Link className={activePage.includes('/Dashboard/VSTab') ? 'py-3 pl-12 border-r-[6px] border-[#F3933F]  bg-[#1A0B06]' : 'py-3 pl-12'} href="/Dashboard/VSTab">VS Tab</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
