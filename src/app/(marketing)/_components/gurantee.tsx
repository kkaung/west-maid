import { headingVariants } from '@/components/page-header';
import { cn } from '@/lib/utils';
import React, { type HTMLAttributes } from 'react';
import Image from 'next/image';
import FeaturedImage from '/public/assets/images/guarantee.jpeg';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

interface GuranteeProps extends HTMLAttributes<HTMLElement> {}

export default function Gurantee({ ...props }: GuranteeProps) {
    return (
        <section
            id="gurantee"
            aria-labelledby="gurantee-heading"
            className={cn(
                props.className,
                'p-12 bg-secondary flex flex-col max-h-[500px] items-center gap-12 rounded-lg md:flex-row'
            )}
        >
            <Image
                width={500}
                height={500}
                src={FeaturedImage}
                alt="Bond Cleaner"
                className="rounded-xl hidden md:block"
            />
            <div className="flex-1 space-y-4">
                <h2 className={cn(headingVariants({}))}>
                    200% Satisfaction Guarantee
                </h2>
                <p className="text-primary/80">
                    Our 200% Satisfaction Guarantee ensures you experience a
                    sparkling clean you&apos;ll love, every time. We don&apos;t
                    just clean, we transform your home with meticulous attention
                    to detail and eco-friendly products. Not happy with a
                    specific area? Simply let us know within 24 hours and
                    we&apos;ll send a team back to re-clean it at no extra cost.
                </p>
                <Link href="/booking" className={cn(buttonVariants({}))}>
                    Book My Cleaning
                </Link>
            </div>
        </section>
    );
}
