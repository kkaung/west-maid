import { Icons } from '@/components/icons';
import type { FooterItem, MainNavItem } from '@/types';

export type SiteConfig = typeof siteConfig;

const links = {
    facebook: 'https://www.facebook.com/people/West-Maid/61556968664093/',
    instagram: 'https://instagram.com/westmaidperth',
    twitter: 'https://twitter.com/westmaidperth',
    pinterest: 'https://www.pinterest.com.au/westmaidperth',
    linkin: 'https://www.linkedin.com/company/west-maid',
    youtube: 'https://www.youtube.com/@WestMaid',
    googlemap: '',

    yelp: 'https://www.yelp.com/biz/',
};

export const siteConfig = {
    logo: 'WestMaid',
    name: 'West Maid',
    title: `West Maid - Cleaning Serivce Perth`,
    description: `Our top-rated cleaning services come with a 200% satisfaction guarantee. We deliver sparkling results you'll love with our professional cleaners. Book online in 60 seconds!`,
    url: 'https://westmaid.com.au',
    ogImage: 'https://westmaid.com.au/opengraph-image.png',
    mainNav: [
        {
            title: 'Services',
            items: [
                {
                    title: 'Deep Cleaning',
                    href: '/deep-cleaning-perth',
                },
                {
                    title: 'Regular Cleaning',
                    href: '/regular-cleaning-perth',
                },
                {
                    title: 'End Of Lease Cleaning',
                    href: '/end-of-lease-cleaning-perth',
                },
                {
                    title: 'Office Cleaning',
                    href: '/office-cleaning-perth',
                },
                {
                    title: 'Oven Cleaning',
                    href: '/oven-cleaning-perth',
                },
                {
                    title: 'Carpet Cleaning',
                    href: '/carpet-cleaning-perth',
                },
                {
                    title: 'Window Cleaning',
                    href: '/window-cleaning-perth',
                },
                {
                    title: 'After Builder Cleaning',
                    href: '/after-builder-cleaning-perth',
                },
                {
                    title: 'Airbnb Cleaning',
                    href: '/airbnb-cleaning-perth',
                },
            ],
        },
        {
            title: 'Pricing',
            href: '/house-cleaning-pricing-perth',
        },
    ] satisfies MainNavItem[],
    links,
    footerNav: [
        {
            title: 'Services',
            items: [
                {
                    title: 'Deep Cleaning',
                    href: '/deep-cleaning-perth',
                },
                {
                    title: 'Regular Cleaning',
                    href: '/regular-cleaning-perth',
                },
                {
                    title: 'End Of Lease Cleaning',
                    href: '/end-of-lease-cleaning-perth',
                },
                {
                    title: 'Office Cleaning',
                    href: '/office-cleaning-perth',
                },
                {
                    title: 'Oven Cleaning',
                    href: '/oven-cleaning-perth',
                },
                {
                    title: 'Carpet Cleaning',
                    href: '/carpet-cleaning-perth',
                },
                {
                    title: 'Window Cleaning',
                    href: '/window-cleaning-perth',
                },
                {
                    title: 'After Builder Cleaning',
                    href: '/after-builder-cleaning-perth',
                },
                {
                    title: 'Airbnb Cleaning',
                    href: '/airbnb-cleaning-perth',
                },
            ],
        },
        {
            title: 'Useful Links',
            items: [
                { title: 'Contact Us', href: '/contact' },
                { title: 'Blog', href: '/blog' },
                { title: 'Pricing', href: '/house-cleaning-pricing-perth' },
                { title: 'Checklist', href: '/house-cleaning-checklist' },
                { title: 'FAQs', href: '/frequently-asked-questions' },
                { title: 'Privacy Policy', href: '/privacy' },
                { title: 'Terms And Conditions', href: '/terms' },
            ],
        },
        {
            title: 'Company',
            items: [
                { title: 'About Us', href: '/about-us' },
                { title: 'Careers', href: '/careers' },
                { title: 'Sitemap', href: '/sitemap' },
            ],
        },
    ] satisfies FooterItem[],
    business: {
        email: 'contact@westmaid.com.au',
        phone: '1302 245 417',
        address: '76 Stirling St, Perth WA 6000',
        openingHour: 'Mon – Sun: 9:00 AM – 5:00 PM',
    },
    rating: {
        ratingValue: '4.9',
        ratingCount: 727,
    },
};

export const siteServices: {
    title: string;
    slug: string;
    icon?: keyof typeof Icons;
}[] = [];
