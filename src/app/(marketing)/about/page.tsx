import { type Metadata } from 'next';
import { Shell } from '@/components/shell';
import { siteConfig } from '@/configs/site';
import React from 'react';

export const runtime = 'edge';

export const metadata: Metadata = {
    title: `About Us - ${siteConfig.name}`,
    description: '',
};

export default function page() {
    return <Shell>page</Shell>;
}
