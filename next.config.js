/** @type {import('next').NextConfig} */
const nextConfig = {
  // serverActions uyarısını kaldırıyoruz
  experimental: {
    // serverActions özelliği artık varsayılan olarak etkin
    serverComponentsExternalPackages: ["@prisma/client"]
  },
  // Diğer yapılandırmalar
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'images.unsplash.com'] // Harici görüntüler için izin verilen alan adları
  }
};

module.exports = nextConfig;