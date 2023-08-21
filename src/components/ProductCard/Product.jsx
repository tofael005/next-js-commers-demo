import React from 'react';
import pro1 from "../../../public/product/product1.jpeg"
import pro2 from "../../../public/product/product2.jpeg"
import pro3 from "../../../public/product/product3.jpeg"
import pro4 from "../../../public/product/product4.jpeg"
import pro5 from "../../../public/product/product5.jpeg"
import pro6 from "../../../public/product/product6.jpeg"
import Image from 'next/image';
import { BsStarFill } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';

const Product = () => {
    return (
        <div className="max-w-[1240px] mx-auto">
            <h1 className="text-center text-3xl font-bold my-6">Product Section</h1>
            <div className="grid md:grid-cols-4 gap-8 px-3">
                <div className="border p-3 shadow rounded-md">
                    <Image src={pro1}></Image>
                    <div>
                        <h1 className="text-xl font-bold">Water Blend</h1>
                        <div className="flex justify-between items-center">
                            <div className="text-orange-600 flex items-center gap-1 my-3">
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarHalf />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Viewing: 1230+</p>
                            </div>
                        </div>
                        <h1 className="font-semibold text-sm mb-3">PRICE : $65</h1>
                        <button className="bg-orange-400 w-full p-3 text-white font-bold duration-300 rounded-b-md hover:bg-orange-600">Add To Cart</button>
                    </div>
                </div>
                <div className="border p-3 shadow rounded-md">
                    <Image src={pro2}></Image>
                    <div>
                        <h1 className="text-xl font-bold">Water Blend</h1>
                        <div className="flex justify-between items-center">
                            <div className="text-orange-600 flex items-center gap-1 my-3">
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarHalf />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Viewing: 1230+</p>
                            </div>
                        </div>
                        <h1 className="font-semibold text-sm mb-3">PRICE : $65</h1>
                        <button className="bg-orange-400 w-full p-3 text-white font-bold duration-300 rounded-b-md hover:bg-orange-600">Add To Cart</button>
                    </div>
                </div>
                <div className="border p-3 shadow rounded-md">
                    <Image src={pro3}></Image>
                    <div>
                        <h1 className="text-xl font-bold">Water Blend</h1>
                        <div className="flex justify-between items-center">
                            <div className="text-orange-600 flex items-center gap-1 my-3">
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarHalf />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Viewing: 1230+</p>
                            </div>
                        </div>
                        <h1 className="font-semibold text-sm mb-3">PRICE : $65</h1>
                        <button className="bg-orange-400 w-full p-3 text-white font-bold duration-300 rounded-b-md hover:bg-orange-600">Add To Cart</button>
                    </div>
                </div>
                <div className="border p-3 shadow rounded-md">
                    <Image src={pro4}></Image>
                    <div>
                        <h1 className="text-xl font-bold">Water Blend</h1>
                        <div className="flex justify-between items-center">
                            <div className="text-orange-600 flex items-center gap-1 my-3">
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarHalf />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Viewing: 1230+</p>
                            </div>
                        </div>
                        <h1 className="font-semibold text-sm mb-3">PRICE : $65</h1>
                        <button className="bg-orange-400 w-full p-3 text-white font-bold duration-300 rounded-b-md hover:bg-orange-600">Add To Cart</button>
                    </div>
                </div>
                <div className="border p-3 shadow rounded-md">
                    <Image src={pro1}></Image>
                    <div>
                        <h1 className="text-xl font-bold">Water Blend</h1>
                        <div className="flex justify-between items-center">
                            <div className="text-orange-600 flex items-center gap-1 my-3">
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarHalf />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Viewing: 1230+</p>
                            </div>
                        </div>
                        <h1 className="font-semibold text-sm mb-3">PRICE : $65</h1>
                        <button className="bg-orange-400 w-full p-3 text-white font-bold duration-300 rounded-b-md hover:bg-orange-600">Add To Cart</button>
                    </div>
                </div>
                <div className="border p-3 shadow rounded-md">
                    <Image src={pro6}></Image>
                    <div>
                        <h1 className="text-xl font-bold">Water Blend</h1>
                        <div className="flex justify-between items-center">
                            <div className="text-orange-600 flex items-center gap-1 my-3">
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarHalf />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Viewing: 1230+</p>
                            </div>
                        </div>
                        <h1 className="font-semibold text-sm mb-3">PRICE : $65</h1>
                        <button className="bg-orange-400 w-full p-3 text-white font-bold duration-300 rounded-b-md hover:bg-orange-600">Add To Cart</button>
                    </div>
                </div>
                <div className="border p-3 shadow rounded-md">
                    <Image src={pro3}></Image>
                    <div>
                        <h1 className="text-xl font-bold">Water Blend</h1>
                        <div className="flex justify-between items-center">
                            <div className="text-orange-600 flex items-center gap-1 my-3">
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarHalf />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Viewing: 1230+</p>
                            </div>
                        </div>
                        <h1 className="font-semibold text-sm mb-3">PRICE : $65</h1>
                        <button className="bg-orange-400 w-full p-3 text-white font-bold duration-300 rounded-b-md hover:bg-orange-600">Add To Cart</button>
                    </div>
                </div>
                <div className="border p-3 shadow rounded-md">
                    <Image src={pro5}></Image>
                    <div>
                        <h1 className="text-xl font-bold">Water Blend</h1>
                        <div className="flex justify-between items-center">
                            <div className="text-orange-600 flex items-center gap-1 my-3">
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarHalf />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Viewing: 1230+</p>
                            </div>
                        </div>
                        <h1 className="font-semibold text-sm mb-3">PRICE : $60</h1>
                        <button className="bg-orange-400 w-full p-3 text-white font-bold duration-300 rounded-b-md hover:bg-orange-600">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;