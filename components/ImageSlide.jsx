'use client'
import React from 'react'
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from "keen-slider/react";
import Image from 'next/image'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

const ImageSlide = ({ images }) => {
    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        mode: "snap",
        slides: { perView: 1, spacing: 0 },
    });


    return (
        <div className="relative flex justify-center w-full md:max-w-[478px] mx-auto items-center">
            {/* Arrow Left */}
            <button
                className="absolute z-50 -left-4 top-1/2 -translate-y-1/2 cursor-pointer text-white bg-black/50 rounded-full p-2 hover:bg-[#8545AD] hover:scale-125 transition-transform duration-600"
                onClick={() => instanceRef.current?.prev()}
            >
                <AiOutlineArrowLeft size={18} />
            </button>

            {/* Slider */}
            <div ref={sliderRef} className="keen-slider rounded-[2.5rem] overflow-hidden">
                {images.map((image, index) => (
                    <div key={index} className="keen-slider__slide">
                        <Image
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-[478px] h-fit rounded-[2.5rem]"
                            width={478}
                            height={300}
                        />
                    </div>
                ))}
            </div>

            {/* Arrow Right */}
            <button
                className="absolute -right-4 top-1/2 -translate-y-1/2 cursor-pointer text-white bg-black/50 rounded-full p-2 hover:bg-[#8545AD] hover:scale-125 transition-transform duration-600"
                onClick={() => instanceRef.current?.next()}
            >
                <AiOutlineArrowRight size={18} />
            </button>
        </div>
    )
}

export default ImageSlide;
