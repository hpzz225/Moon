import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import * as React from 'react';

export interface IAppProps {
    children: React.ReactNode;
}

export default function DefaultLayout({ children }: IAppProps) {
    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <main className="flex-grow bg-white">{children}</main>
            <Footer />
        </div>
    );
}
