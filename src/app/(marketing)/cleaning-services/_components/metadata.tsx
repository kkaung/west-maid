import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `Sydney's Cleaning Services For Home & Office`,
        description: `Professional Cleaning for Sydney Houses, Apartments, Townhouses, Estates And Offices. Book expert cleaners online in 60 seconds.`,
        alternates: {
            canonical: pathname,
        },
    };
};
