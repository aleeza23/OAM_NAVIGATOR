import React from 'react'
import testimonialImg from '../assets/testimonial-img.png'
import Container from '@/components/Container'
import Image from 'next/image'
import WaitListBtn from '@/components/WaitListBtn'

const SingleTestimonial = () => {
    return (
        <section className='py-12'>
            <Container>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-6  lg:px-12">
                    <div data-aos="zoom-in" data-aos-duration="600">
                        <Image src={testimonialImg} className='w-[389px] h-fit mx-auto lg:mx-0 ' alt='' />
                    </div>

                    <div className='flex flex-col gap-y-5 mx-auto lg:mx-0'>
                        <svg data-aos="fade-left" data-aos-duration="600" width="104" height="104" viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M79.0647 52.7627C88.7838 52.7627 95.3333 59.6456 95.3333 69.8439C95.3333 79.0211 87.8057 86.6667 77.61 86.6667C66.4423 86.6667 58.1904 77.4894 58.1904 63.4715C58.1904 31.6097 81.0085 18.865 95.3333 17.3333V31.3513C85.6204 33.135 74.7004 43.0749 74.2114 54.0422C74.7004 53.7901 76.6381 52.7627 79.0647 52.7627ZM29.5471 52.7627C39.2538 52.7627 45.8095 59.6456 45.8095 69.8439C45.8095 79.0211 38.2819 86.6667 28.0861 86.6667C16.9185 86.6667 8.66663 77.4894 8.66663 63.4715C8.66663 31.6097 31.4847 18.865 45.8095 17.3333V31.3513C36.0966 33.135 25.1766 43.0749 24.6876 54.0422C25.1766 53.7901 27.1142 52.7627 29.5471 52.7627Z" fill="#050505" />
                        </svg>

                        <p data-aos="fade-left" data-aos-duration="700" className='text-[#000000] font-poppins max-w-xl opacity-80 text-base md:text-[27px] mt-1.5'>
                            Lorem ipsum dolor sit amet consectetur. Adipiscing ut nisi leo nibh eros in. Sed nulla quis scelerisque vitae. Fringilla massa facilisis non mattis mauris nisl. Dui ut hendrerit fames imperdiet proin nisl sit mauris.
                        </p>

                        <div>
                            <h1 className='text-[#000000] mt-4 font-poppins font-semibold' data-aos="fade-left" data-aos-duration="800" >Francis Towne</h1>
                            <p data-aos="fade-left" data-aos-duration="900" className='font-poppins text-[#000000] font-light'>Future Response Technician</p>
                        </div>
                        <WaitListBtn />

                    </div>
                </div>
            </Container>
        </section>
    )
}

export default SingleTestimonial