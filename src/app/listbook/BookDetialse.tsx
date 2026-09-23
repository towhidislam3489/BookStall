import BookDitelseReadBtn from '@/component/services/BookDitelseReadBtn';
import BookDitelseWishlistBtn from '@/component/services/BookDitelseWishlistBtn';
import { IBookCard } from '@/type/BookDatatype';
import Image from 'next/image';
import React from 'react';

const BookDetialse = ({ eachbook }: { eachbook: IBookCard }) => {
    return (
        <div className="p-10 shadow-sm max-w-[80%] mx-auto grid grid-cols-12 gap-5 mb-20 mt-20">
            <div className="relative h-150 col-span-5 overflow-hidden bg-gray-100 items-center justify-center">
                <Image
                    src={eachbook.image}
                    alt={eachbook.bookName}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 rounded-2xl"
                />
            </div>
            <div className="col-span-7 space-y-4">
                <h2 className="card-title text-3xl font-semibold">{eachbook.bookName}</h2>
                <h1>By : {eachbook.author}</h1>
                <hr className="border-gray-300"></hr>
                <h1>{eachbook.category}</h1>
                <hr className="border-gray-300"></hr>
                <p><span className="font-semibold">Review :</span> {eachbook.review}</p>
                <div className="flex gap-3">
                    <p className="font-semibold p-2">Tag</p>
                    <div className="flex gap-6">
                        {eachbook.tags.map((v, ind) => <p key={ind} className="text-green-400 bg-amber-50 p-2 rounded-2xl">#{v}</p>)}
                    </div>
                </div>
                <hr className="border-gray-300"></hr>
                <div>
                    <div className="flex gap-5">
                        <h1 className="w-40 ">Number of page:</h1>
                        <h1 className="font-semibold">{eachbook.totalPages}</h1>
                    </div>
                    <div className="flex gap-5">
                        <h1 className="w-40 ">Publisher:</h1>
                        <h1 className="font-semibold">{eachbook.publisher}</h1>
                    </div>
                    <div className="flex gap-5">
                        <h1 className="w-40 ">Year of Publiching:</h1>
                        <h1 className="font-semibold">{eachbook.yearOfPublishing}</h1>
                    </div>
                    <div className="flex gap-5">
                        <h1 className="w-40 ">Reating:</h1>
                        <h1 className="font-semibold">{eachbook.rating}</h1>
                    </div>
                </div>
                <div className="flex gap-8 ">
                    <BookDitelseReadBtn eachData={eachbook}></BookDitelseReadBtn>
                    <BookDitelseWishlistBtn eachData={eachbook}></BookDitelseWishlistBtn>
                   
                </div>
            </div>
        </div >
    );
};

export default BookDetialse;