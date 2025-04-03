'use client';

import { initAOS } from '@/utils/initAOS';
import { useEffect } from 'react';

const AOSProvider = () => {
    useEffect(() => {
        initAOS();
    }, []);

    return null;
};

export default AOSProvider;
