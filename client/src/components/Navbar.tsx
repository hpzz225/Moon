'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import Image from 'next/image';
import { PhoneCall } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface NavLink {
    href: string;
    label: string;
}

const links: NavLink[] = [
    { href: '/giat-say', label: 'Dịch Vụ Giặt Sấy' },
    { href: '/giay-dep', label: 'Vệ Sinh Giày Dép' },
    { href: '/khan-rem', label: 'Giặt Sấy Khăn Rèm' },
    { href: '/gau-bong', label: 'Vệ Sinh Gấu Bông, Topper' },
];

const Navbar = () => {
    const pathname = usePathname();

    const isPriceActive = links.some((link) => link.href === pathname);
    return (
        <nav className="bg-[#eaf3f7] py-4 ">
            <div className="container mx-auto flex justify-between items-center min-h-[100px]">
                <Link href="/">
                    <Image
                        src="/images/logo.png"
                        alt="logo"
                        width={200}
                        height={64}
                        style={{ width: '108px', height: '45px' }} // Thêm style nếu cần
                    />
                </Link>

                <div className="flex items-center space-x-6 font-semibold relative">
                    <Link
                        href="/"
                        className={`${
                            pathname === '/'
                                ? 'text-[#f37470]'
                                : 'text-[#1b8b8d]'
                        } hover:text-[#46b4b6]`}
                    >
                        Về Moon
                    </Link>
                    <Link
                        href="/dich-vu"
                        className={`${
                            pathname === '/dich-vu'
                                ? 'text-[#f37470]'
                                : 'text-[#1b8b8d]'
                        } hover:text-[#46b4b6]`}
                    >
                        Dịch vụ
                    </Link>

                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger
                            className={`text-[#1b8b8d] hover:text-[#46b4b6] focus:outline-none ${
                                isPriceActive
                                    ? 'text-[#f37470]'
                                    : 'text-[#1b8b8d]'
                            }`}
                        >
                            Bảng giá
                            <span className="ml-1">&#9662;</span>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content
                            className="bg-white shadow-lg rounded-md py-2 w-full z-50"
                            sideOffset={5}
                        >
                            {links.map((link) => (
                                <DropdownMenu.Item asChild key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={`block px-4 py-2 ${
                                            pathname === link.href
                                                ? 'text-[#f37470]'
                                                : 'text-[#1b8b8d]'
                                        } hover:bg-[#f3f4f6] hover:text-[#46b4b6] outline-none`}
                                    >
                                        {link.label}
                                    </Link>
                                </DropdownMenu.Item>
                            ))}
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>

                    <Link
                        href="/shop"
                        className={`${
                            pathname === '/shop'
                                ? 'text-[#f37470]'
                                : 'text-[#1b8b8d]'
                        } hover:text-[#46b4b6]`}
                    >
                        Cửa hàng
                    </Link>
                    <Link
                        href="/lien-he"
                        className={`${
                            pathname === '/lien-he'
                                ? 'text-[#f37470]'
                                : 'text-[#1b8b8d]'
                        } hover:text-[#46b4b6]`}
                    >
                        Liên hệ
                    </Link>
                    <div className="bg-[#54B8BD] text-white py-2 px-6 rounded-full flex items-center gap-2">
                        <PhoneCall color="white" />
                        <span>0123 456 789</span>
                    </div>

                    <Link
                        href="/sign-in"
                        className="flex justify-center login-btn ht_mirror w-40"
                    >
                        Đăng nhập
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
