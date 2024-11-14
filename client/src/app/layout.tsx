import type { Metadata } from 'next';

import './globals.css';
import { Baloo_2 } from 'next/font/google';

const baloo2 = Baloo_2({
    weight: ['400', '500', '600', '700', '800'],
    variable: '--font-baloo-2',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Moon',
    description: 'Moon Ecommerce Store',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={baloo2.className}>{children}</body>
        </html>
    );
}
