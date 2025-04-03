'use client'
import React from 'react'
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from "keen-slider/react";

const TestimonialSlide = ({ testimonials }) => {
    const [sliderRef, instanceRef] = useKeenSlider({
        mode: "free-snap",
        slides: { perView: 1, spacing: 0 },

    });
    return (
        <>
            {/* Left Arrow */}
            <button
                onClick={() => instanceRef.current?.prev()}
                className="absolute left-0 lg:left-12 top-[60%] lg:top-1/2 -translate-y-1/2 text-white cursor-pointer rounded-full p-3 transition-transform transform hover:scale-105"
            >
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M46.875 25C46.875 24.5856 46.7104 24.1882 46.4174 23.8951C46.1243 23.6021 45.7269 23.4375 45.3125 23.4375H8.45938L18.2938 13.6062C18.5871 13.3128 18.752 12.9149 18.752 12.5C18.752 12.0851 18.5871 11.6871 18.2938 11.3937C18.0004 11.1003 17.6024 10.9355 17.1875 10.9355C16.7726 10.9355 16.3746 11.1003 16.0813 11.3937L3.58125 23.8937C3.43574 24.0389 3.3203 24.2113 3.24153 24.4011C3.16276 24.591 3.12221 24.7945 3.12221 25C3.12221 25.2055 3.16276 25.409 3.24153 25.5988C3.3203 25.7887 3.43574 25.9611 3.58125 26.1062L16.0813 38.6062C16.3746 38.8996 16.7726 39.0645 17.1875 39.0645C17.6024 39.0645 18.0004 38.8996 18.2938 38.6062C18.5871 38.3128 18.752 37.9149 18.752 37.5C18.752 37.0851 18.5871 36.6871 18.2938 36.3937L8.45938 26.5625H45.3125C45.7269 26.5625 46.1243 26.3979 46.4174 26.1048C46.7104 25.8118 46.875 25.4144 46.875 25Z" fill="white" />
                </svg>
            </button>
            {/* Testimonial Slide */}
            <div ref={sliderRef} className="keen-slider overflow-hidden">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="keen-slider__slide  xl:w-1/2 lg:w-[100%] w-full mx-auto text-center">
                        <h1 className="text-xl md:text-4xl lg:text-5xl uppercase font-semibold lg:leading-[55px] text-white font-poppins">
                            {testimonial.text}
                        </h1>
                        <h2 className="text-[#FFFFFF] font-poppins mt-12 font-medium text-sm">
                            {testimonial.name}
                        </h2>
                        <p className="text-white font-poppins font-extralight mt-1.5">
                            {testimonial.position}
                        </p>
                    </div>
                ))}
            </div>

            {/* Right Arrow */}
            <button
                onClick={() => instanceRef.current?.next()}
                className="absolute right-0 lg:right-12 top-[60%] lg:top-1/2 -translate-y-1/2 text-white rounded-full p-3 cursor-pointer transition-transform transform hover:scale-105"
            >
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.125 25C3.125 24.5856 3.28962 24.1882 3.58265 23.8951C3.87567 23.6021 4.2731 23.4375 4.6875 23.4375H41.5406L31.7062 13.6062C31.4129 13.3128 31.248 12.9149 31.248 12.5C31.248 12.0851 31.4129 11.6871 31.7062 11.3937C31.9996 11.1003 32.3976 10.9355 32.8125 10.9355C33.2274 10.9355 33.6254 11.1003 33.9187 11.3937L46.4187 23.8937C46.5643 24.0389 46.6797 24.2113 46.7585 24.4011C46.8372 24.591 46.8778 24.7945 46.8778 25C46.8778 25.2055 46.8372 25.409 46.7585 25.5988C46.6797 25.7887 46.5643 25.9611 46.4187 26.1062L33.9187 38.6062C33.6254 38.8996 33.2274 39.0645 32.8125 39.0645C32.3976 39.0645 31.9996 38.8996 31.7062 38.6062C31.4129 38.3128 31.248 37.9149 31.248 37.5C31.248 37.0851 31.4129 36.6871 31.7062 36.3937L41.5406 26.5625H4.6875C4.2731 26.5625 3.87567 26.3979 3.58265 26.1048C3.28962 25.8118 3.125 25.4144 3.125 25Z" fill="white" />
                </svg>
            </button>
        </>
    )
}

export default TestimonialSlide