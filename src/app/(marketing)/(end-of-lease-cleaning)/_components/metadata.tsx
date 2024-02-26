import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `${location}'s End Of Lease Cleaning Service - 100% Bond Back Guarantee`,
        description: `Top rated vacate cleaning service in ${location}. Get Your Bond Back with 100% Guaranteed Bond Cleaning. Book online in 60 seconds!`,
        alternates: {
            canonical: pathname,
        },
    };
};
