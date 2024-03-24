import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from '@/components/page-header';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import React from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Metadata } from 'next';
import { formatDate } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { type Author, allAuthors } from 'contentlayer/generated';
import { Icons } from '@/components/icons';
import Link from 'next/link';

import FAQs from '../_components/faqs';

export const runtime = 'edge';

export const metadata: Metadata = {
    title: 'House Cleaning Prices In Perth',
    description: `Get crystal clear pricing on Perth's top-rated house cleaning services. Find the perfect fit for your budget and needs, with options from weekly refreshes to deep dives.`,
    keywords: ['cleaning price perth', 'house cleaning price'],
    alternates: {
        canonical: '/house-cleaning-pricing-brisbane',
    },
};

const pricingList = [
    {
        title: '1 Bedroom, 1 Bathroom',
        price: '$339',
    },
    {
        title: '2 Bedroom, 1 Bathroom',
        price: '$400',
    },
    {
        title: '3 Bedroom, 2 Bathroom',
        price: '$469',
    },
    {
        title: '4 Bedroom, 2 Bathroom',
        price: '$549',
    },
    {
        title: '4 Bedroom, 3 Bathroom',
        price: '$579',
    },
    {
        title: '5 Bedroom, 3 Bathroom',
        price: '$659',
    },
    {
        title: '6 Bedroom, 3 Bathroom',
        price: '$709',
    },
];

export default function Page() {
    const author = allAuthors.find(
        author => author.slugAsParams === 'kaung'
    ) as Author;

    return (
        <Shell as="article">
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: 'Pricing', href: '/pricing' },
                ]}
                dottable={false}
            />
            <PageHeader className="text-center">
                <PageHeaderHeading>
                    House Cleaning Pricing In Perth
                </PageHeaderHeading>
                <PageHeaderDescription className="mx-auto">
                    <time
                        dateTime={'2024-01-04T00:00:00.000Z'}
                        className="block text-sm text-muted-foreground mb-2"
                    >
                        Updated on {formatDate('2024-01-04T00:00:00.000Z')}
                    </time>
                </PageHeaderDescription>
            </PageHeader>
            <div className="mx-auto prose prose-quoteless prose-neutral dark:prose-invert">
                <p>
                    Coast Maid provides a range of high-quality cleaning
                    services, from house cleaning to{' '}
                    <Link href="/office-cleaning-perth">
                        office cleaning
                    </Link>
                    ,{' '}
                    <Link href="/bond-cleaning-perth">
                        end of lease cleaning
                    </Link>{' '}
                    and{' '}
                    <Link href="/carpet-cleaning-perth">
                        carpet cleaning
                    </Link>
                    . We cater to homes throughout Gold Coast, offering
                    top-notch cleaning solutions at affordable prices, ensuring
                    accessibility to the best cleaners in the city for all.
                </p>
                <p>
                    This guide unveils the secrets to sparkling spaces without
                    the shocking bill. From hourly rates to flat fees, discover
                    the perfect cleaning solution for your home and budget.
                    Breathe easy knowing you&apos;re getting expert service
                    without the stress of hidden fees.
                </p>
            </div>
            <section className="broder max-w-xl mx-auto w-full">
                <Table>
                    <TableCaption>A list of house cleaning prices.</TableCaption>
                    <TableHeader>
                        <TableRow className="text-base">
                            <TableHead className="w-[300px]">
                                Home / Apartment
                            </TableHead>
                            <TableHead>Pricing</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {pricingList.map(p => (
                            <TableRow key={p.title} className="text-base">
                                <TableCell className="font-medium">
                                    {p.title}
                                </TableCell>
                                <TableCell>{p.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </section>
            <FAQs />
            <section className="my-8 max-w-xl mx-auto">
                <Card className="border-0 bg-secondary/50 rounded-xl">
                    <CardHeader>
                        <div className="flex gap-4">
                            <CardTitle>
                                <Avatar>
                                    <AvatarImage
                                        src={author.avatar}
                                        alt="Author Avatar"
                                    />
                                    <AvatarFallback>
                                        {author.title.charAt(0).toUpperCase()}
                                    </AvatarFallback>
                                </Avatar>
                            </CardTitle>
                            <div className="font-semibold">
                                <p className="text-xs text-muted-foreground">
                                    Article by
                                </p>
                                <Link href={`/authors/${author.slugAsParams}`}>
                                    <p className="relative text-primary hover:underline">
                                        {author.title}
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4 text-foreground">
                        <p className="text-foreground text-sm">
                            {author.description}
                        </p>
                        <div className="flex gap-4">
                            <Link
                                aria-label="Linkin"
                                target="_blank"
                                href={`https://www.linkedin.com/in/${author.linkin}`}
                            >
                                <Icons.linkin aria-hidden className="h-4 w-4" />
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </section>
        </Shell>
    );
}
