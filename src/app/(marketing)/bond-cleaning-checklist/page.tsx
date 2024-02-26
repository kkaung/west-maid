import React from 'react';
import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from '@/components/page-header';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

import Checklist from '../_components/checklist';

export const runtime = 'edge';

export function generateMetadata(): Metadata {
    const pathname = getPathname();

    return {
        title: 'End Of Lease Cleaning - Bond Cleaning Checklist',
        description: `Relax knowing you haven't missed a thing with our complete checklist. Maximise your bond return with our expert cleaning.`,
        alternates: {
            canonical: pathname,
        },
    };
}

export default function Page() {
    return (
        <Shell>
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: 'Checklist', href: '/bond-cleaning-checklist' },
                ]}
                dottable={false}
            />
            <PageHeader className="text-center">
                <PageHeaderHeading>
                    End Of Lease & Bond Cleaning Checklist
                </PageHeaderHeading>
            </PageHeader>
            <Checklist />
        </Shell>
    );
}
