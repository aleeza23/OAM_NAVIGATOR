import Container from '@/components/Container'
import React from 'react'
import bgImg from '../assets/level-up-sales.png'
import WaitListBtn from '@/components/WaitListBtn'

const LevelUpSales = () => {
    return (
        <section className='py-12'>
            <Container>
                {/* Background Image Container */}
                <div
                    className='relative py-12 px-5 lg:p-20 rounded-2xl flex items-center justify-center bg-cover '
                    style={{ backgroundImage: `url(${bgImg.src})` }}
                >
                    <div className='bg-white rounded-2xl p-5 lg:p-9 w-2xl'  >
                        <h1 data-aos="zoom-in-up" data-aos-duration="600" className='font-poppins text-[#1D1B1D] my-4 lg:mb-5 text-center font-semibold text-3xl flex whitespace-nowrap sm:block lg:text-4xl '>Monetize Influence</h1>
                        <p data-aos="zoom-in-up"  data-aos-duration="700" className='text-center font-poppins  lg:text-md max-w-lg mx-auto text-[#1D1B1D]'>If you’re ready to master Online Audience Monetization (OAM), partner with top influencers and brands, and take a cut of the profits, this is your chance. Join a community of high achievers. We'll help you build a business that pays you every month and creates the freedom you deserve.</p>
                        <div className="flex justify-center -mt-2">
                            <WaitListBtn />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default LevelUpSales
