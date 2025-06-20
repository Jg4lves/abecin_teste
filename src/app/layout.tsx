import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Layout from '@/components/layout/Layout'
import { Roboto } from 'next/font/google'

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900'
})
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900'
})
const roboto = Roboto({
	subsets: ['latin'],
	weight: ['100', '300', '400', '500', '700', '900'],
	display: 'swap'
})

export const metadata: Metadata = {
	title: 'Abecin',
	description:
		'A ABECIN é um espaço político que valoriza tanto a discussão quanto a prática de novos saberes.'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-br" className={roboto.className}>
			<head>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
				/>
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}
			>
				<Layout>{children}</Layout>
			</body>
		</html>
	)
}
