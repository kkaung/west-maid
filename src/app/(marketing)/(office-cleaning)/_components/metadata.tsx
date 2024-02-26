import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `Commercial Office Cleaning Service In Sydney`,
        description: `Get a sparkling clean office with our professional office cleaners. Sydney's trusted commercial office cleaning service. Book online in 60 seconds!`,
        alternates: {
            canonical: pathname,
        },
    };
};
