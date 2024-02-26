import { cn } from '@/lib/utils';
import React, { type HTMLAttributes } from 'react';
import Image from 'next/image';
import Homely from '/public/assets/images/homely.webp';
import Domain from '/public/assets/images/domain.png.webp';
import RealEstate from '/public/assets/images/realestate.com.au.webp';

interface FeaturingProps extends HTMLAttributes<HTMLElement> {}

export default function Featuring({ ...props }: FeaturingProps) {
    return (
        <section
            id="featuring"
            aria-labelledby="featured-heading"
            className={cn(props.className, 'py-12')}
        >
            <h3 className="font-semibold md:text-center">
                Trusted by the real estate agents from
            </h3>
            <div className="flex gap-6 items-center justify-center md:max-w-lg md:mx-auto md:w-full">
                <Image
                    width={150}
                    height={150}
                    src={Homely}
                    alt="Homely"
                    className="grayscale"
                />
                <Image
                    width={100}
                    height={100}
                    src={Domain}
                    alt="Domain"
                    className="grayscale"
                />
                <Image
                    width={100}
                    height={100}
                    src={RealEstate}
                    alt="Domain"
                    className="grayscale"
                />
            </div>
        </section>
    );
}
