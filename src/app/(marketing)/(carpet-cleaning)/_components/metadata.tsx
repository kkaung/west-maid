import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `Carpet Cleaning Service In ${location} - Carpet Stain Removal`,
        description: `${location}'s top carpet cleaner tackles even the toughest stains. Breathe life back into your carpets! Book online in 60 seconds.`,
        alternates: {
            canonical: pathname,
        },
    };
};
