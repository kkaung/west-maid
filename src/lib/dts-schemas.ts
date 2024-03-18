import { siteConfig } from '@/configs/site';
import type { Graph, Organization, Product, WebSite } from 'schema-dts';
import { absoluteUrl } from './utils';

const isBrowser = typeof window !== 'undefined';

// const pathname = window.location.pathname;

export const OrganizationSchema: Organization = {
    '@type': 'Organization',
    name: siteConfig.title,
    description: siteConfig.description,
    logo: absoluteUrl('/images/logo.png'),
    // url: absoluteUrl(pathname),
    ...(isBrowser && { url: absoluteUrl(window.location.pathname) }),
    email: siteConfig.business.email,
    telephone: siteConfig.business.phone,
    address: siteConfig.business.address,
    sameAs: [
        siteConfig.links.facebook,
        siteConfig.links.linkin,
        siteConfig.links.instagram,
        siteConfig.links.pinterest,
        siteConfig.links.youtube,
    ],
};

export const ProductSchema: Product = {
    '@type': 'Product',
    name: siteConfig.title,
    description: siteConfig.description,
    image: absoluteUrl('/images/logo.png'),
    brand: {
        '@type': 'Brand',
        name: siteConfig.name,
    },
    aggregateRating: {
        '@type': 'AggregateRating',
        bestRating: '5',
        worstRating: '1',
        ratingValue: siteConfig.rating.ratingValue,
        ratingCount: siteConfig.rating.ratingCount,
    },
};

export const WebSiteSchema: WebSite = {
    '@type': 'WebSite',
    name: siteConfig.title,
    description: siteConfig.description,
    inLanguage: 'en-GB',
};

export const graphSchemas: Graph = {
    '@context': 'https://schema.org',
    '@graph': [OrganizationSchema, WebSiteSchema, ProductSchema],
};
