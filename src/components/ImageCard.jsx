import Image from 'next/image';
import React from 'react';

const ImageCard = ({ image, title, subtitle, animationDuration }) => {
    return (
        <div
            className='relative w-full h-[508px] sm:h-full lg:h-[508px] '
            data-aos="fade-left"
            data-aos-duration={animationDuration}
        >
            {/* Image with smooth scale on hover */}
            <Image
                src={image}
                alt={title}
                className="object-cover rounded-3xl w-full h-full "
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 rounded-3xl transition-all duration-300 hover:opacity-25 "></div>
            {/* Overlay Text */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-12 flex flex-col justify-end items-center text-white px-4  ">
                <h3 className="text-3xl font-medium font-helixa uppercase">{title}</h3>
                <p className={`${subtitle === "Guide Free" ? "text-5xl lg:text-6xl" : "text-6xl"} font-playfair flex whitespace-nowrap bg-gradient-to-r from-[#3F51B5] via-[#8E44AD] to-[#E91E63] bg-clip-text text-transparent overflow-visible`}>
                    <i>{subtitle}</i>
                </p>
            </div>
        </div>
    );
};

export default ImageCard;
