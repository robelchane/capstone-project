/** @type {import('next').NextConfig} */
 import createNextIntlPlugin from 'next-intl/plugin';

 const withNextIntl = createNextIntlPlugin();


const nextConfig = {
    images: {
      domains: ['img.clerk.com'], // Add the Clerk image domain here
    },
  };
  
  export default withNextIntl(nextConfig);
  