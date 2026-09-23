import React from 'react';


import bannerImg from '@/assets/hero_img.jpg'
import Image from 'next/image';
const Banner = () => {
    return (
        <div className="max-w-[80%] mx-auto mt-20">
            <div className="flex   items-center bg-[#F3F3F3] justify-between p-6">
                <div className="space-y-12">
                    <h1 className="text-5xl font-bold ">Books to freshen up <br></br> your bookshelf</h1>
                    <button className="bg-green-600  w-60 h-10 rounded-[5px] text-white">
                        View The List
                    </button>
                </div>
                <div className="bg-red-600 rounded-2xl">
                    <Image src={bannerImg} alt='Banner Image' className="bg-red-600 rounded-2xl"></Image>
                </div>
            </div>
        </div>
    );
};

export default Banner;