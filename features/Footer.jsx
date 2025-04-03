import Image from 'next/image'
import React from 'react'
import logo from '../assets/logo.png'
import Container from '@/components/Container'
import Link from 'next/link'


const Footer = () => {
    return (
        <footer className='pb-12'>
            <Container>
                <div className="grid lg:grid-cols-6 gap-6">
                    <div className='lg:col-span-2'>
                        {/* <Image src={logo} alt='' /> */}
                        <p className='text-md font-poppins max-w-[21rem] text-[#1D1B1D] mt-6 mb-4'>OAM Navigator is more than just training—it’s your launchpad to uncapped income and location freedom.</p>
                        <small className='font-poppins  text-[#444444]'>© OAM NAVIGATOR 2025. All rights reserved   </small>
                    </div>

                    <div className='lg:flex '>
                        <Link

                            href={'/'}
                            className="text-black font-medium tracking-wide  uppercase font-poppins text-sm"
                        >
                            THE Community
                        </Link>
                    </div>
                    <div className='lg:flex '>
                        <Link

                            href={'/'}
                            className="text-black font-medium tracking-wide  uppercase font-poppins text-sm"
                        >
                            Member stories
                        </Link>
                    </div>
                    <div className='lg:flex '>
                        <Link

                            href={'#about'}
                            className="text-black font-medium tracking-wide  uppercase font-poppins text-sm"
                        >
                            Meet Max
                        </Link>
                    </div>
                    <div className='lg:flex '>
                        <Link

                            href={'/'}
                            className="text-black font-medium tracking-wide uppercase font-poppins text-sm"
                        >
                            JOIN THE WAITLIST
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer