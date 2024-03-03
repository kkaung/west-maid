import { headingVariants } from '@/components/page-header';
import { siteConfig } from '@/configs/site';
import { cn } from '@/lib/utils';
import React, { type HTMLAttributes } from 'react';

interface FeaturesProps extends HTMLAttributes<HTMLElement> {
    location: string;
}

const items = [
    {
        title: '200% Satisfaction Guarantee',
        content: `Book with confidence knowing your satisfaction is guaranteed. If anything isn't spotless, we'll happily reclean the area in free of charge.`,
    },
    {
        title: 'Simple & Easy Booking',
        content: `Cleaning services are booked online with one simple process, using your phone or computer.`,
    },
    {
        title: 'Expert Office Cleaners',
        content: `Our staff are professionally trained so you can trust our cleaning teams to do the best job possible.`,
    },
    {
        title: 'Cleaning Equipment Provided',
        content: `For your convenience, our team brings their own cleaning equipment for each service.`,
    },
    {
        title: 'Full Liability Insurance',
        content: `Our cleaning service is covered by our $10 million public liability insurance.`,
    },
    {
        title: 'Exceptional Customer Service',
        content: `Trust our expert customer service team for comprehensive support from inquiry to post-service, ensuring your satisfaction at every stage.`,
    },
    {
        title: 'Across Perth',
        content: `We’ve got insured & vetted oven cleaners across Perth, ready to help get you in getting your oven sparkling clean.`,
    },
    {
        title: 'No Hidden Fees',
        content: `Our prices are final and fully inclusive of fuel and GST, and any other charges. What you see is what you pay.`,
    },
    {
        title: '7 days / week',
        content: `We’ve got cleaning teams available at any day of the week, including public holidays.`,
    },
];

export default function Features({ ...props }: FeaturesProps) {
    return (
        <section
            id="features"
            aria-labelledby="features-heading"
            className={cn(props.className, 'py-12 space-y-12')}
        >
            <div className="space-y-1">
                <p className="text-pink-500 uppercase font-medium">
                    Why {siteConfig.name}
                </p>
                <h2 className={headingVariants({})}>
                    More Than Just A Cleaning Service
                </h2>
            </div>
            <ul className="grid grid-cols-1 gap-y-6 gap-x-12 md:grid-cols-3">
                {items.map((item, idx) => {
                    return (
                        <li key={idx} className="space-y-3 py-6 border-b">
                            <h3 className="font-semibold text-lg">
                                {item.title}
                            </h3>
                            <p className="leading-tight text-muted-foreground">
                                {item.content}
                            </p>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
