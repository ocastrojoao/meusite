const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // Esta linha é a solução para o problema de casing no Windows.
    // Ela força o Webpack a usar o caminho real dos arquivos.
    config.resolve.symlinks = false;
    
    return config;
  },
};

module.exports = nextConfig;