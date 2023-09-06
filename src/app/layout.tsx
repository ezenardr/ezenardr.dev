import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

export const metadata: Metadata = {
    title: 'Rodolphe Ezenard',
    description: 'Empowering Your Online Success with Tailored Web Solutions',
    metadataBase: new URL('https://ezenardr.dev'),
    alternates: {
        canonical: 'https://ezenardr.dev',
    },
};
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
