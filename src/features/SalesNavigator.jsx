'use client'
import Container from '@/components/Container'
import React, { useState } from 'react'
import image01 from '../assets/sales.png'
import image02 from '../assets/sales02.png'
import image03 from '../assets/sales03.png'
import image04 from '../assets/sales04.png'
import image05 from '../assets/sales05.png'

import WaitListBtn from '@/components/WaitListBtn'
import ImageSlide from '@/components/ImageSlide'

const images = [image01, image02, image03, image04, image05];

const SalesNavigator = () => {

    return (
        <section className='py-12' id='about'>
            <Container>
                <div className="md:grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Image Section */}
                    <ImageSlide images={images} />

                    {/* Text Section */}
                    <div className='flex flex-col mx-auto lg:mx-0 gap-y-2'>
                        <div className='flex flex-col mx-auto lg:mx-0 gap-y-3' data-aos="fade-down" data-aos-duration="400">
                            <h1 className='text-[#1D1B1D] font-semibold font-poppins text-4xl lg:text-[42px] mt-5 md:mt-0 max-w-md'>I’ve Done It. Now It’s Your Turn </h1>
                            <h3 className='-mt-2 font-playfair font-normal text-2xl bg-gradient-to-r from-[#8E44AD] to-[#E91E63] bg-clip-text text-transparent'>-Max (Founder)</h3>
                            <p className='font-normal font-poppins max-w-xl text-[16px]'>
                                If you found me through social media or heard how I help influencers and brands turn their audience into real revenue, welcome—I’m glad you’re here.
                            </p>
                            <p className='font-normal font-poppins max-w-xl text-[16px] mt-2'>
                                I started at JP Morgan Chase, helping a massive corporation monetize its customers. The work was fine, but the 9-5 grind? Not so much. So, I took my savings, booked a one-way flight to Thailand, and built an agency doing cold outreach. It worked—but sending emails to cold strangers all day wasn’t exactly my dream life. Then I had a realization: influencers already have engaged audiences—they just need a system to actually make money from them.
                            </p>
                            <p className='font-normal font-poppins max-w-xl text-[16px] mt-2'>
                                That’s why I started <b>Online Audience Monetization (OAM)—</b>helping influencers generate revenue in minutes a day while I take a percentage of what we bring in. No cold outreach, no chasing leads <br />—just working with top creators and brands.
                            </p>
                            <p className='font-normal font-poppins max-w-xl text-[16px] mt-2'>
                                Now, I teach others how to do the same through OAM Navigator— <br />with one-on-one mentorship, direct connections to top brands and creators, and a community of like-minded people to help you succeed. Let’s get to work.
                            </p>
                        </div>
                        <div className='-mt-2'>
                            <WaitListBtn />
                        </div>

                    </div>
                </div>
            </Container>
        </section>
    )
}

export default SalesNavigator;
