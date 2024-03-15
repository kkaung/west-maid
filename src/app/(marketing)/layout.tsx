import { type PropsWithChildren } from 'react';
import { SiteHeader } from '@/components/layouts/site-header';
import SiteFooter from '@/components/layouts/site-footer';
import { OrganizationSchema } from '@/lib/dts-schemas';

export default async function Layout({ children }: PropsWithChildren) {
    const jsonLd = OrganizationSchema;

    return (
        <>
            <div className="relative h-full flex min-h-screen flex-col">
                <SiteHeader />
                <main className="flex-1">{children}</main>
                <SiteFooter />
            </div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </>
    );
}
