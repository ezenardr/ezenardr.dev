import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Rodolphe Ezenard',
    description: 'Empowering Your Online Success with Tailored Web Solutions',
    metadataBase: new URL('https://ezenardr.dev'),
    alternates: {
        canonical: 'https://ezenardr.dev',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
