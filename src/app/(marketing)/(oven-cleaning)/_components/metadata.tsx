import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `Professional BBQ & Oven Cleaning Service In ${location}`,
        description: `We are top-rated oven cleaning company in Perth. Book online in 60 seconds!`,
        alternates: {
            canonical: pathname,
        },
    };
};
