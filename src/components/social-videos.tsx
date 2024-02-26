'use client';

import { cn } from '@/lib/utils';
import React, { HTMLAttributes } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from './ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { AspectRatio } from './ui/aspect-ratio';
import Image from 'next/image';
import HeroOneImage from '/public/assets/images/hero-one.jpeg';
import { Icons } from './icons';

interface SocialVideosProps extends HTMLAttributes<HTMLElement> {}

export default function SocialVideos({ ...props }: SocialVideosProps) {
    const items = [{ title: '' }];

    return (
        <section id="social-videos" className={cn(props.className)}>
            <Carousel
                className="w-full"
                plugins={[
                    Autoplay({
                        delay: 5000,
                    }),
                ]}
                opts={{
                    loop: true,
                }}
            >
                <CarouselContent>
                    <CarouselItem className="basis-1/2 md:basis-1/5">
                        <div className="p-1">
                            <div className="overflow-hidden rounded-xl max-w-xs relative cursor-pointer">
                                <AspectRatio
                                    ratio={2 / 3}
                                    className="bg-secondary"
                                >
                                    <Image
                                        fill
                                        src={HeroOneImage}
                                        alt="End Of Lease Cleaner"
                                        className="object-top object-cover bg-no-repeat"
                                    />
                                </AspectRatio>
                                <Icons.play className="w-12 h-12 absolute inset-x-1/2 inset-y-1/2 -translate-y-1/2 -translate-x-1/2 text-gray-100/90" />
                                <div className="absolute inset-0 bg-black/10 z-10" />
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/2 md:basis-1/5">
                        <div className="p-1">
                            <div className="overflow-hidden rounded-xl max-w-xs">
                                <AspectRatio
                                    ratio={2 / 3}
                                    className="bg-secondary"
                                >
                                    <Image
                                        fill
                                        src={HeroOneImage}
                                        alt="End Of Lease Cleaner"
                                        className="object-top object-cover bg-no-repeat"
                                    />
                                </AspectRatio>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/2 md:basis-1/5">
                        <div className="p-1">
                            <div className="overflow-hidden rounded-xl max-w-xs">
                                <AspectRatio
                                    ratio={2 / 3}
                                    className="bg-secondary"
                                >
                                    <Image
                                        fill
                                        src={HeroOneImage}
                                        alt="End Of Lease Cleaner"
                                        className="object-top object-cover bg-no-repeat"
                                    />
                                </AspectRatio>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/2 md:basis-1/5">
                        <div className="p-1">
                            <div className="overflow-hidden rounded-xl max-w-xs">
                                <AspectRatio
                                    ratio={2 / 3}
                                    className="bg-secondary"
                                >
                                    <Image
                                        fill
                                        src={HeroOneImage}
                                        alt="End Of Lease Cleaner"
                                        className="object-top object-cover bg-no-repeat"
                                    />
                                </AspectRatio>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/2 md:basis-1/5">
                        <div className="p-1">
                            <div className="overflow-hidden rounded-xl max-w-xs">
                                <AspectRatio
                                    ratio={2 / 3}
                                    className="bg-secondary"
                                >
                                    <Image
                                        fill
                                        src={HeroOneImage}
                                        alt="End Of Lease Cleaner"
                                        className="object-top object-cover bg-no-repeat"
                                    />
                                </AspectRatio>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/2 md:basis-1/5">
                        <div className="p-1">
                            <div className="overflow-hidden rounded-xl max-w-xs">
                                <AspectRatio
                                    ratio={2 / 3}
                                    className="bg-secondary"
                                >
                                    <Image
                                        fill
                                        src={HeroOneImage}
                                        alt="End Of Lease Cleaner"
                                        className="object-top object-cover bg-no-repeat"
                                    />
                                </AspectRatio>
                            </div>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
            </Carousel>
        </section>
    );
}
