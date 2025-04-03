import Container from '@/components/Container'
import React from 'react'
import img from '../assets/oam-strategy.png'
import Image from 'next/image'
import FreeGuideBtn from '@/components/FreeGuideBtn'

const RemoteSales = () => {
    return (
        <section className='py-12 lg:px-12'>
            <Container>
                <div className='bg-white rounded-2xl p-6 lg:p-0  md:w-max lg:w-auto mx-auto lg:mx-0 '>
                    <div className="grid lg:grid-cols-2 items-center">
                        <div className='mx-auto lg:mx-0' data-aos="zoom-out" data-aos-duration="600">
                            <Image src={img} className='lg:h-[500px] object-contain' alt='' />
                        </div>
                        <div className='lg:-mt-6 mx-auto lg:mx-0'>
                            <h1 data-aos="fade-down" data-aos-duration="700" className='font-poppins text-[#1D1B1D] mb-4 font-semibold max-w-sm text-3xl capitalize'>The OAM strategy </h1>
                            <p data-aos="fade-down" data-aos-duration="800" className='font-poppins lg:text-md font-normal text-[#1D1B1D] max-w-sm'>This isn’t just another free guide—it’s your first step toward working with top influencers and brands while making real money on your terms. The OAM Strategy reveals how Online Audience Monetization works, showcasing how others are turning social influence into serious income. You’ll discover the strategy, the earning potential, and how you can get started—even with zero experience.</p>
                            <FreeGuideBtn />
                        </div>
                    </div>
                </div>
            </Container>

        </section>
    )
}

export default RemoteSales