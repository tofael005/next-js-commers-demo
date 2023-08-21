import Image from 'next/image';
import React from 'react';
import banner from "../../public/banner.jpeg"

const Banner = () => {
    return (
        <div>
           <Image src={banner}></Image>
        </div>
    );
};

export default Banner;