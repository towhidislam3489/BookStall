'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavBar = () => {
    const pathname=usePathname();
    return (
        <div className="sticky top-0 z-50 bg-white">
            <div className="flex items-center justify-between max-w-[80%] mx-auto mt-5 mb-5">
                <h1 className="text-2xl font-bold">Book Vibe</h1>
                <ul className="flex gap-10">
                   <li> <Link href={'/'} className="font-semibold">Home</Link></li>
                    <li> <Link href={'/listbook'} className="font-semibold">Listed Book</Link> </li>
                    <li> <Link href={'/readBook'} className="font-semibold">Pages to Read</Link> </li>
                </ul>
                <div className="flex gap-8 ">
                    <button className="bg-green-600 w-20 h-10 rounded-[5px] text-white">
                        Sign in
                    </button>
                    <button className="bg-blue-600  w-20 h-10 rounded-[5px] text-white">
                        Sign up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;