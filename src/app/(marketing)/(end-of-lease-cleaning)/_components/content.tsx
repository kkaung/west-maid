import { Shell } from '@/components/shell';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import React from 'react';

import Hero from './hero';
import FAQs from './faqs';
import Features from './features';
import Reviews from './reviews';

import LatestBlog from '../../_components/latest-blog';
import Commitment from '@/components/commitment';
import Services from './services';
import About from '@/components/about';

interface ContentProps {
    city: string;
    suburb?: string;
    segments: { title: string; href: string }[];
}

export default function Content({ city, suburb, segments }: ContentProps) {
    return (
        <>
            <Shell>
                <Hero location={city} />
                <Reviews location={city} />
                <Features location={city} />
                <Services />
                <FAQs />
                <About />
                <LatestBlog />
                <Commitment />
                <Breadcrumbs segments={segments} dottable={false} />
            </Shell>
        </>
    );
}
