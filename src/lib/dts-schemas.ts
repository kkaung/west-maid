import { siteConfig } from '@/configs/site';
import { Organization, Product } from 'schema-dts';

export const OrganizationSchema: Organization = {
    '@type': 'Organization',
    name: siteConfig.title,
    description: siteConfig.description,
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
    brand: {
        '@type': 'Brand',
        name: siteConfig.name,
    },
    aggregateRating: {
        '@type': 'AggregateRating',
        bestRating: 5,
        worstRating: 1,
        ratingValue: siteConfig.rating.ratingValue,
        ratingCount: siteConfig.rating.ratingCount,
    },
};

export const ProductSchema: Product = {
    '@type': 'Product',
};
