import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   
        images: {
            remotePatterns: [{
                protocol: 'https',
                hostname: '**',      
               
           },
          { 
               hostname: 'www.techmeme.com',    
            },
            ],
        },
    };

module.exports = nextConfig;