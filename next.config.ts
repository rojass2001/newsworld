import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // configure network image for security


    // images: {
    //domains: ['www.techmeme.com', 'vitalik.ca', 'platform.theverge.com', 'gizmodo.com', 'images.macrumors.com',
    //'ichef.bbci.co.uk', 'npr.brightspotcdn.com', 'cdn.mos.cms.futurecdn.net', 'a.fsdn.com', 'i.insider.com',
    // 'www.cnet.com', 'media.zenfs.com', 's.yimg.com', 'api.time.com', 'i.abcnewsfe.com', 'imgs.hipertextual.com',
    //   'media.wired.com', 'hackaday.com', 'thecommunemag.com', 'cdn.theatlantic.com', 'a1.espncdn.com'
    // ],
    //},


    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: '**.cdn.net', // wildcard subdomain match
            pathname: '/**',
        },
        {
            protocol: 'https',
            hostname: '**.com', // catch broader `.com` domains (use cautiously)
            pathname: '/**',
        },
        {
            protocol: 'https',
            hostname: '**.co.uk',
            pathname: '/**',
        },
        {
            protocol: 'http',
            hostname: 'vitalik.ca',
            pathname: '/**',
        },
        {
            protocol: 'https',
            hostname: '**',
            pathname: '/**',
        },
        ],
    },
}
module.exports = nextConfig;