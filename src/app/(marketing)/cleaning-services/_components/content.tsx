import React from 'react';
import { Shell } from '@/components/shell';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';

import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from '@/components/page-header';

interface ContentProps {
    city: string;
    suburb?: string;
    segments: { title: string; href: string }[];
}

export default function Content({ city, suburb, segments }: ContentProps) {
    return (
        <>
            <Shell>
                <Breadcrumbs segments={segments} dottable={false} />
                <PageHeader>
                    <PageHeaderHeading>
                        Top Quality Cleaning Services in Sydney
                    </PageHeaderHeading>
                    <PageHeaderDescription>
                        We&apos;re not just cleaners, we&apos;re
                        difference-makers. We transform cluttered spaces into
                        oases of calm and cleanliness, using eco-friendly
                        products that are safe for your family and the
                        environment.
                    </PageHeaderDescription>
                </PageHeader>
            </Shell>
        </>
    );
}
