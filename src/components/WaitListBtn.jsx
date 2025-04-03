'use client'
import React, { useState } from 'react'
import Modal from './Modal'
import Image from 'next/image'
import img from '../assets/formImg.png'

const WaitListBtn = ({ btnBg = 'bg-[#8545AD]', border = 'border-0', arrowFont = 'font-helixa' }) => {
    const [waitlistModal, setwaitlistModal] = useState(false)

    return (
        <>
            <button
                onClick={() => setwaitlistModal(true)}
                className={`${btnBg} ${border} cursor-pointer w-max mt-8 text-[#FFFFFF] uppercase font-poppins group text-sm font-medium rounded-xl py-3 px-6 tracking-wide transition-all duration-300 ease-in-out  hover:translate-y-[-2px]`}
            >
                JOIN THE WAITLIST
                <span
                    className={`font-normal ${arrowFont} inline-block transition-transform duration-300 ease-in-out ms-1.5 group-hover:-rotate-45`}
                >
                    →
                </span>
            </button>


            <Modal isOpen={waitlistModal} setIsOpen={setwaitlistModal}>
                <div className='md:flex flex-col md:flex-row'>
                    <div className='hidden md:block w-full md:w-[40%]'>
                        <div className='w-full h-full bg-gradient-to-tl  from-[#8E44AD] to-[#E91E63]'></div>
                    </div>
                    <div className='w-full md:w-[60%] p-0 md:p-6'>
                        <h1 className='font-poppins font-semibold text-black text-[27px] mb-6 mt-9 md:mt-0'>Join the Waitlist Now!</h1>

                        {/* form */}
                        <form action=''>
                            <div className='mb-5'>
                                <label className='font-helixa font-bold text-[#2D2E2E] text-md'>Name</label>
                                <input required type='text' className='w-full outline-0 bg-[#F6F6F6] py-2 rounded-sm px-4 mt-2' placeholder='Enter your name' />
                            </div>
                            <div className='mb-5'>
                                <label className='font-helixa font-bold text-[#2D2E2E] text-md'>Email</label>
                                <input required type='text' className='w-full outline-0 bg-[#F6F6F6] py-2 rounded-sm px-4 mt-2' placeholder='Enter your email address' />
                            </div>
                            <div className='mb-5'>
                                <label className='font-helixa font-bold text-[#2D2E2E] text-md'>Phone Number</label>
                                <input required type='number' className='w-full outline-0 bg-[#F6F6F6] py-2 rounded-sm px-4 mt-2' placeholder='Enter your phone number' />
                            </div>

                            <button className='bg-[#8545AD] transition-all duration-300 ease-in-out hover:opacity-90 cursor-pointer w-full mt-6 text-[#FFFFFF] uppercase font-helixa text-sm font-medium rounded-xl py-3 px-6 tracking-wide'>
                                JOIN THE WAITLIST →
                            </button>
                        </form>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default WaitListBtn;
