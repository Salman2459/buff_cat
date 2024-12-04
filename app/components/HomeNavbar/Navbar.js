'use client'
import Link from 'next/link';
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const handleHamburgerClick = (event) => {
        event.stopPropagation();
        setIsMenuOpen((prev) => !prev);
    };
    return (
        <nav className="sticky top-0 w-full z-10 text-white bg-[#291b0e] border-b-2 border-[#ffd1a07a]">
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Logo */}
                <div className='flex items-center h-full text-[1.4em] font-bold  text-[#fff]'>
                    <img src='/mainLogo.png ' className='w-[50px] h-[50px] mr-4' />
                    Buff Cat
                </div>

                {/* Links for larger screens */}
                <div className="hidden md:flex gap-10 items-center">
                    <Link href='/MainHome' className="hover:text-gray-300">
                        Open App
                    </Link>
                    <Link href="https://docs.buffcat.org/ " className="hover:text-gray-300">
                        Docs
                    </Link>
                    <div className="flex gap-4 items-center">
                        <Link href="https://t.me/" target="_blank" rel="noopener noreferrer">
                            <img src="/mainTelegram.png" alt="Telegram" className="w-9 h-9" />
                        </Link>
                        <Link href="https://x.com/BuffCatOfficial" target="_blank" rel="noopener noreferrer">
                            <img src="/mainX.png" alt="X" className="w-8 h-8 bg-white rounded-xl" />
                        </Link>
                        <Link href="https://discord.com/" target="_blank" rel="noopener noreferrer">
                            <img src="/mainDiscord.png" alt="Discord" className="w-10 h-8" />
                        </Link>
                    </div>
                </div>

                {/* Hamburger Menu for smaller screens */}
                <div className="md:hidden relative">
                    <button className="focus:outline-none" onClick={handleHamburgerClick} >
                        <div className="flex flex-col justify-center pt-2">
                            {
                                isMenuOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                                </svg>
                                    : <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                                    </svg>
                            }
                        </div>
                    </button>

                    {/* Sliding Menu */}
                    <div ref={menuRef} className={`fixed top-0 left-0 h-[calc(90vh)] mt-[89px] w-64 p-4 z-10 bg-[#291b0e] border-r-2 border-[#ffd1a07a] transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`} >
                        <Link href="/MainHome" className="block py-2 ">
                            Open App
                        </Link>
                        <Link href="https://docs.buffcat.org/ " className="block py-2 ">
                            Docs
                        </Link>
                        <div className="flex gap-4 mt-4 ">
                            <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80" >
                                <img src="/mainTelegram.png" alt="Telegram" className="w-6 h-6" />
                            </a>
                            <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80" >
                                <img src="/mainX.png" alt="X" className="w-6 h-6" />
                            </a>
                            <a href="https://discord.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80" >
                                <img src="/mainDiscord.png" alt="Discord" className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar