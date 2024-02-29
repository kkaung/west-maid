import { Icons } from '@/components/icons';
import type { FooterItem, MainNavItem } from '@/types';

export type SiteConfig = typeof siteConfig;

const links = {
    facebook:
        'https://www.linkedin.com/company/more-clean-house-cleaning-sydney',
    instagram: 'https://instagram.com/westmaid_au',
    twitter: 'https://twitter.com/westmaid_au',
    pinterest: 'https://www.pinterest.com.au/magicclean_au',
    linkin: 'https://www.linkedin.com/company/',
    youtube: 'https://www.youtube.com/channel/',
    googlemap: '',

    buynsw: 'https://buy.nsw.gov.au/supplier/profile',
    yelp: 'https://www.yelp.com/biz/',
};

export const siteConfig = {
    logo: 'WestMaid',
    name: 'West Maid',
    title: `Perth's Premium House Cleaning Serivce | West Maid`,
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
                    title: 'Window Cleaning',
                    href: '/window-cleaning-perth',
                },
                {
                    title: 'Builder Cleaning',
                    href: '/builder-cleaning-perth',
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
            title: 'Cleaning Services',
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
                    title: 'Builder Cleaning',
                    href: '/builder-cleaning-perth',
                },
            ],
        },
        {
            title: 'Useful Links',
            items: [
                { title: 'Services', href: '/cleaning-services' },
                { title: 'Contact Us', href: '/contact' },
                { title: 'Blog', href: '/blog' },
                { title: 'Pricing', href: '/house-cleaning-pricing-sydney' },
                { title: 'Checklist', href: '/house-cleaning-checklist' },
                { title: 'FAQs', href: '/frequently-asked-questions' },
                { title: 'Privacy Policy', href: '/privacy' },
                { title: 'Terms And Conditions', href: '/terms' },
            ],
        },
        {
            title: 'Company',
            items: [
                { title: 'About Us', href: '/about' },
                { title: 'Careers', href: '/careers' },
            ],
        },
    ] satisfies FooterItem[],
    business: {
        email: 'contact@westmaid.com.au',
        phone: '1302 245 417',
        address: '401/249 George St, 2017 NSW',
        openingHour: 'Mon – Sun: 9:00 AM – 5:00 PM',
    },
    rating: {
        ratingValue: '4.9',
        ratingCount: '727',
    },
};

export const siteServices: {
    title: string;
    slug: string;
    icon?: keyof typeof Icons;
}[] = [];
