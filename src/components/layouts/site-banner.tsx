import React, { HTMLAttributes } from 'react';

interface SiteBannerProps extends HTMLAttributes<HTMLElement> {}

export default function SiteBanner({ ...props }: SiteBannerProps) {
    return <div>SiteBanner</div>;
}
