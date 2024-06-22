const nextConfig = {
  images: {
      domains: ['images.unsplash.com', 'rickandmortyapi.com','source.unsplash.com'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'source.unsplash.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'rickandmortyapi.com',
          pathname: '/api/character/avatar/**',
        },
      ],
    },
};

export default nextConfig;