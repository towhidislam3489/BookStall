import { IBookCard } from '@/type/BookDatatype';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IeachbookCard {
    eachbook: IBookCard;
}

const BookCard = ({ eachbook }: IeachbookCard) => {
    return (
        <Link href={`/listbook/${eachbook.bookId}`}>
            <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

                {/* Book Image */}
                <div className="relative h-72 w-full overflow-hidden bg-gray-100">
                    <Image
                        src={eachbook.image}
                        alt={eachbook.bookName}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                {/* Content */}
                <div className="p-5">

                    {/* Tags */}
                    <div className="mb-3 flex flex-wrap gap-2">
                        {eachbook.tags.slice(0, 2).map((tag, index) => (
                            <span
                                key={index}
                                className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Book Name */}
                    <h2 className="line-clamp-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                        {eachbook.bookName}
                    </h2>

                    {/* Author */}
                    <p className="mt-2 text-sm text-gray-500">
                        By <span className="font-medium text-gray-700">{eachbook.author}</span>
                    </p>

                    {/* Category & Rating */}
                    <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">

                        <div>
                            <p className="text-xs text-gray-400">Category</p>
                            <p className="mt-1 text-sm font-semibold text-gray-700">
                                {eachbook.category}
                            </p>
                        </div>

                        <div className="text-right">
                            <p className="text-xs text-gray-400">Rating</p>
                            <p className="mt-1 text-sm font-semibold text-yellow-500">
                                ⭐ {eachbook.rating}
                            </p>
                        </div>

                    </div>

                    {/* Button */}
                    <button className="mt-5 w-full rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600">
                        View Details
                    </button>

                </div>
            </div>
        </Link>
    );
};

export default BookCard;