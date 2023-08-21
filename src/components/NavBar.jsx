import { BsCartPlusFill } from 'react-icons/bs';
import logo from "../../public/logo.jpeg"

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const NavBar = () => {
    return (
        <div className="max-w-[1240px] mx-auto">
            <div className="flex justify-between items-center py-6">
                <Link href="/"><Image className="w-24" src={logo}></Image></Link>
                <ul className="flex items-center justify-center gap-6">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/product">Product</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link href="/addcart"><BsCartPlusFill /></Link>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default NavBar;