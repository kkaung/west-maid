import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `Airbnb Cleaning Service In ${location}`,
        description: `Our professional cleaners ensure impeccable standards for every guest, boosting your 5-star reviews and bookings. Book online in 60 seconds!`,
        alternates: {
            canonical: pathname,
        },
    };
};
