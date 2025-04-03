'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';

export const initAOS = () => {
    AOS.init({    
        once: true,     
        easing: 'ease-in-out', 
        offset: 50,   
    });
};
