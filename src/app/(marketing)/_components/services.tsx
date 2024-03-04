import React, { type HTMLAttributes } from 'react';
import { headingVariants } from '@/components/page-header';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { items } from '@/configs/service';
import AfterBuilderCleanImage from '/public/assets/images/after-builder-cleaning.png';
import DeepCleanImage from '/public/assets/images/deep-cleaning.png';
import RegularCleanImage from '/public/assets/images/regular-cleaning.png';
import AirbnbCleanImage from '/public/assets/images/airbnb-cleaning.png';
import OvenCleanImage from '/public/assets/images/oven-cleaning.png';
import CarpetCleanImage from '/public/assets/images/carpet-cleaning.png';
import OfficeCleanImage from '/public/assets/images/office-cleaning.png';
import BondCleanImage from '/public/assets/images/bond-cleaning.png';
import WindowCleanImage from '/public/assets/images/window-cleaning.png';
import Link from 'next/link';

interface ServicesProps extends HTMLAttributes<HTMLElement> {}

export default function Services({ ...props }: ServicesProps) {
    return (
        <section
            id="services"
            aria-labelledby="services-heading"
            className={cn(props.className)}
            {...props}
        >
            <h2 className={headingVariants({})}>Cleaning Services</h2>
            <ul className="mt-6 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {items.map(i => {
                    const ImageSrc = getImageSrc(i.image);

                    return (
                        <li
                            key={i.title}
                            className="border rounded-xl overflow-hidden group cursor-pointer"
                        >
                            <Link href={i.href} title={`${i.title} Perth`}>
                                <Image
                                    src={ImageSrc!}
                                    alt={`${i.title}`}
                                    className="object-cover object-center aspect-video"
                                />
                            </Link>
                            <div className="p-4">
                                <Link href={i.href} title={`${i.title} Perth`}>
                                    <h3 className="font-semibold group-hover:underline">
                                        {i.title}
                                    </h3>
                                </Link>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

function getImageSrc(image: string) {
    switch (image) {
        case 'RegularCleanImage':
            return RegularCleanImage;
        case 'DeepCleanImage':
            return DeepCleanImage;
        case 'BondCleanImage':
            return BondCleanImage;
        case 'OfficeCleanImage':
            return OfficeCleanImage;
        case 'OvenCleanImage':
            return OvenCleanImage;
        case 'CarpetCleanImage':
            return CarpetCleanImage;
        case 'WindowCleanImage':
            return WindowCleanImage;
        case 'AfterBuilderCleanImage':
            return AfterBuilderCleanImage;
        case 'AirbnbCleanImage':
            return AirbnbCleanImage;
    }
}
