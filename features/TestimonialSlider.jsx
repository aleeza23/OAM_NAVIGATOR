'use client'
import Container from '@/components/Container'
import TestimonialSlide from '@/components/TestimonialSlide';
import React, { useState } from 'react'

const testimonials = [
    {
        text: '" Coaching and hands-on training helped me double my income! "',
        name: 'David Lee',
        position: 'Former OAM member'
    },
    {
        text: '" I landed a high-paying remote sales job in just weeks! "',
        name: 'David Lee',
        position: 'Former OAM member'
    },
    {
        text: '" This program gets you hired and making real money fast! "',
        name: 'David Lee',
        position: 'Former OAM member'
    },
    {
        text: '" coaching and hands-on training helped me double my income! "',
        name: 'David Lee',
        position: 'Former OAM member'
    },
    {
        text: '" I landed a high-paying remote sales job in just weeks! "',
        name: 'David Lee',
        position: 'Former OAM member'
    },
];

const TestimonialSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState('');

    const handlePrev = () => {
        setDirection('left');
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const handleNext = () => {
        setDirection('right');
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    return (
        <section className='py-12'>
            <Container>
                {/* Testimonial Container with Arrows */}
                <div className='relative bg-[#8E44ADCC] py-12 px-5 lg:p-24 rounded-2xl flex items-center justify-center overflow-hidden' data-aos="fade-up" data-aos-duration="500">
                    <TestimonialSlide testimonials={testimonials} />
                </div>
            </Container>
        </section>
    )
}

export default TestimonialSlider;
