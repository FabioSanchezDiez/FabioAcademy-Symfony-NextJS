/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        domains: ['firebasestorage.googleapis.com'],
    }
};

export default nextConfig;
