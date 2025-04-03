'use client'
import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import logo from '../assets/logo.png'
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="relative z-50 bg-white  " id="home">
                <div className="mx-auto flex  items-center justify-between lg:justify-center gap-12 h-[10vh] px-4 ">

                    {/* Left Navbar Links */}
                    {[
                        { name: "THE Community", link: "/" },
                        { name: "Member stories", link: "/" },
                    ].map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            className="text-[#1D1B1D] hover:text-black hidden lg:block font-normal  tracking-wider  uppercase font-poppins text-sm"
                        >
                            {item.name}
                        </Link>
                    ))}

                    {/* Logo */}
                    <Link href="/" className="flex items-center justify-center">
                        <Image src={logo} alt="" className='w-32' />
                    </Link>

                    {/* Right Navbar Links */}
                    <Link
                        href={'#about'}
                        className="text-[#1D1B1D] hover:text-black hidden lg:block font-normal  tracking-wider  uppercase font-poppins text-sm"
                    >
                        Meet Max
                    </Link>

                    <button className='bg-[#8545AD] cursor-pointer text-[#FFFFFF] hidden lg:block  uppercase  tracking-wider font-poppins text-sm font-medium rounded-xl py-2 px-6 '>Member Portal →</button>


                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="inline-flex lg:hidden h-10 w-10 items-center justify-center rounded-lg p-2 text-gray-500"
                        aria-controls="navbar-default"
                    >
                        <GiHamburgerMenu size={24} />
                    </button>
                </div>

                {/* Overlay (closes menu when clicked) */}
                {isOpen && (
                    <div
                        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                        onClick={() => setIsOpen(false)}
                    ></div>
                )}

                {/* Sidebar Menu */}
                <div
                    className={`fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white z-50 transform 
                ${isOpen ? "translate-x-0" : "-translate-x-full"} 
                transition-transform duration-300 ease-in-out`}
                >
                    <ul className="mt-12 space-y-4">
                        {[
                            { name: "THE Community", link: "/" },
                            { name: "Member stories", link: "/" },
                            { name: " Meet Max", link: "#about" },
                            { name: "  JOIN THE WAITLIST", link: "/" },
                        ].map((item, index) => (
                            <li key={index} className="px-6">
                                <Link
                                    href={item.link}
                                    onClick={() => setIsOpen(false)}
                                    className="block py-2 text-md uppercase tracking-wide font-helixa font-medium"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

        </>
    );
};

export default Header;
