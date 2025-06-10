import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Andrew Coleburn - Fullstack Developer',
	description:
'Andrew Coleburn is a full-stack developer with 5 years of experience building scalable web applications using React, Next.js, and Node.js.',
	keywords: [
		'Software Developer',
		'Web Developer',
		
		'JavaScript',
		'TypeScript',
		'React',
		'Next.js',
		'User Experience',
		'Problem Solving',
		'Web Development',
		'Frontend Development',
		'Backend Development',
		'Andrew Coleburn',
	],
	authors: [{ name: 'Andrew Coleburn' }],
	creator: 'Andrew Coleburn',
	openGraph: {
		title: 'Andrew Coleburn - Fullstack Developer Portfolio',
		description: 'Passionate fullstack developer creating building simple, scalable, and effective solutions with React and Node.',
		// TODOL 
		url: 'https://arcoleburn.com',
		siteName: 'Andrew Coleburn - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Andrew Coleburn - Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	// twitter: {
	// 	card: 'summary_large_image',
	// 	title: 'Andrew Coleburn - Developer',
	// 	description: 'Passionate fullstack developer creating building simple, scalable, and effective solutions with React and Node.',
	// 	creator: '@yourusername',
	// 	images: ['/og-image.jpg'],
	// },
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
