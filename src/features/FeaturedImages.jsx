import Container from '@/components/Container';
import React from 'react';
import imageOne from '../assets/featured-img-01.png';
import imageTwo from '../assets/featured.png';
import imageThree from '../assets/featured-img-03.jpg';

import ImageCard from '@/components/ImageCard';

const FeaturedImages = () => {
    return (
        <section className='py-12 '>
            <Container>
                <div className="grid sm:grid-cols-2 md:grid-cols-2 my-12 lg:grid-cols-3 gap-6">
                    <ImageCard
                        index='1'
                        image={imageOne}
                        title="Join The"
                        subtitle="Waitlist"
                        animationDuration={500}  
                    />
                    <ImageCard
                        index='2'
                        image={imageTwo}
                        title="MEET OUR"
                        subtitle="Members"
                        animationDuration={600}
                    />
                    <ImageCard
                        index='3'
                        image={imageThree}
                        title="GET THE"
                        subtitle="Guide Free"
                        animationDuration={700} 
                    />
                </div>
            </Container>
        </section>
    );
};

export default FeaturedImages;
