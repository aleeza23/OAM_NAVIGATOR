import React from 'react'
import bgImg from '../assets/freedom-bg.jpg'
import Container from '@/components/Container'
import WaitListBtn from '@/components/WaitListBtn'


const UnlockIndependence = () => {
  return (
    <section className='py-12'>
      <Container>
        {/* Background Image Container */}
        <div
          className='relative py-12 px-5 lg:p-20 rounded-2xl flex items-center justify-center bg-cover bg-bottom h-[440px] '
          style={{ backgroundImage: `url(${bgImg.src})` }}
        >
          <div className="absolute inset-0 bg-black/40 z-40 rounded-3xl"></div>

          <div className='z-50' >
            <h1  data-aos-duration="700" className='font-poppins text-white mb-5 text-center font-bold text-5xl uppercase'>Unlock Your Freedom</h1>
            <p  data-aos-duration="700" className='text-center font-poppins text-lg text-white'>Take control of your life, master audience monetization, and achieve  <br className='hidden md:block' /> financial freedom on your terms.</p>
            <div className="flex justify-center">
              <WaitListBtn arrowFont='font-helixa' btnBg='bg-[#FFFFFF1A]' border='border border-[FFFFFF]' />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default UnlockIndependence