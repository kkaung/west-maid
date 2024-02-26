import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import React from 'react';
import { type Metadata } from 'next';
import { PageHeader, PageHeaderHeading } from '@/components/page-header';
import AccordionList from '@/components/accordion-list';
import { getPathname } from '@/lib/next';

export const runtime = 'edge';

export function generateMetadata(): Metadata {
    const pathname = getPathname();

    return {
        title: 'Frequently Asked Questions About Bond Cleaning',
        description: `Find the answers you're looking for a house cleaning service.`,
        alternates: {
            canonical: pathname,
        },
    };
}

const items = [{ title: '', content: '' }];

export default function Page() {
    return (
        <Shell>
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: 'FAQs', href: '/frequently-asked-questions' },
                ]}
                dottable={false}
            />
            <PageHeader
                id="hero"
                aria-labelledby="hero-heading"
                className="text-center"
            >
                <PageHeaderHeading>
                    Frequently Asked Questions
                </PageHeaderHeading>
            </PageHeader>
            <AccordionList items={[]} />
        </Shell>
    );
}
