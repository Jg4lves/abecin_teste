import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	eslint: {
    ignoreDuringBuilds: true, // <- isso ignora os erros do ESLint na Vercel
},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'abecin.org.br'
			}
		]
	}
}

export default nextConfig
