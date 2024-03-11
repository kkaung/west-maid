import { cn } from '@/lib/utils';
import React, { type HTMLAttributes } from 'react';

interface SponsorshipProps extends HTMLAttributes<HTMLElement> {}

export default function Sponsorship({ ...props }: SponsorshipProps) {
    return <section className={cn(props.className)}>
        
    </section>;
}
