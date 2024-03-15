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
        keywords: [
            'end of lease cleaning service',
            'vacate cleaning serivce',
            'bond cleaning service',
            'bond back cleaning',
            'move out cleaning service',
            'end of lease cleaning service perth',
            'vacate cleaning service perth',
            'move out cleaning service perth',
            'bond cleaning service perth',
            'bond back cleaning service perth',
            'end of lease cleaner',
            'vacate cleaner',
            'bond back cleaner',
            'move out cleaner',
            'bond cleaner'
        ],
    };
};
