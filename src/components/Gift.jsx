import React from 'react';
import gift from "../../public/gift/gift.webp"
import Image from 'next/image';

const Gift = () => {
    return (
        <div className="max-w-[1240px] mx-auto mt-14">
            <div className="grid md:grid-cols-5 gap-6">
                <div>
                    <Image src={gift}></Image>
                    <h1 className="text-xl font-bold">Best Selling</h1>
                </div>
            </div>
        </div>
    );
};

export default Gift;