'use client'
import React, { useState } from 'react'
import Modal from './Modal'
import img from '../assets/formImg.png'
import Image from 'next/image'


const FreeGuideBtn = () => {
    const [freeGuideModal, setfreeGuideModal] = useState(false)

    return (
        <>
            <button
                onClick={() => setfreeGuideModal(true)}
                className={` cursor-pointer w-max mt-8 bg-[#8545AD] text-[#FFFFFF] uppercase font-poppins group text-sm font-medium rounded-xl py-3 px-6 tracking-wide transition-all duration-300 ease-in-out  hover:translate-y-[-2px]`}
            >
                Get your guide
                <span
                    className={`font-normal  inline-block transition-transform duration-300 ease-in-out ms-2 group-hover:-rotate-45`}
                >
                    →
                </span>
            </button>


            <Modal isOpen={freeGuideModal} setIsOpen={setfreeGuideModal}>
                <div className='md:flex flex-col md:flex-row'>
                    <div className='hidden md:block w-full md:w-[40%]'>
                        <div className='w-full h-full bg-gradient-to-tl  from-[#8E44AD] to-[#E91E63]'></div>
                    </div>
                    <div className='w-full md:w-[60%] p-0 md:p-6 mt-9 md:mt-0'>
                        <h1 className='font-poppins font-semibold text-black text-2xl md:text-3xl max-w-xs  mb-6'>Get your Free Guide Now!</h1>

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

                            <button className='bg-[#8545AD] transition-all duration-300 ease-in-out hover:opacity-90 cursor-pointer w-full mt-10 text-[#FFFFFF] uppercase font-helixa text-sm font-medium rounded-xl py-3 px-6 tracking-wide'>
                                Get your guide →
                            </button>
                        </form>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default FreeGuideBtn