import { type PropsWithChildren } from 'react';
import { SiteHeader } from '@/components/layouts/site-header';
import SiteFooter from '@/components/layouts/site-footer';
import { BrandJsonLd } from 'next-seo';
import { siteConfig } from '@/configs/site';
import { absoluteUrl } from '@/lib/utils';

export default async function Layout({ children }: PropsWithChildren) {
    return (
        <>
            <div className="relative h-full flex min-h-screen flex-col">
                <SiteHeader />
                <main className="flex-1">{children}</main>
                <SiteFooter />
            </div>
            <BrandJsonLd
                useAppDir
                id={absoluteUrl('/')}
                aggregateRating={{
                    bestRating: 5,
                    worstRating: 1,
                    ratingCount: siteConfig.rating.ratingCount,
                    ratingValue: siteConfig.rating.ratingValue,
                }}
            />
        </>
    );
}
