import { getCityFromPath } from '@/lib/next';
import { type Metadata } from 'next';
import { getMetadata } from '../_components/metadata';
import React from 'react';
import Content from '../_components/content';

export const runtime = 'edge';

export async function generateMetadata(): Promise<Metadata> {
    const city = getCityFromPath();

    return getMetadata(city);
}

export default function Page() {
    const city = getCityFromPath();

    return (
        <Content
            city={city}
            segments={[
                { title: 'Home', href: '/' },
                {
                    title: 'Regular Cleaning',
                    href: '/regular-cleaning-sydney',
                },
            ]}
        />
    );
}
