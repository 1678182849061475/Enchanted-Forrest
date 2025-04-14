/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
    FOREST_ENVIRONMENT_PATH: process.env.FOREST_ENVIRONMENT_PATH,
    CHARACTER_MODEL_PATH: process.env.CHARACTER_MODEL_PATH,
    BIRD_CHARACTERS_PATH: process.env.BIRD_CHARACTERS_PATH,
    MUSIC_PATH: process.env.MUSIC_PATH,
    POPPING_IMAGES_PATH: process.env.POPPING_IMAGES_PATH,
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(obj|mtl)$/,
      use: 'raw-loader',
    });

    config.module.rules.push({
      test: /\.(mp3)$/,
      type: 'asset/resource',
    });

    return config;
  },
};

export default nextConfig;
