/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'images.booztx.com',
			},
		],
	},
}

module.exports = nextConfig
