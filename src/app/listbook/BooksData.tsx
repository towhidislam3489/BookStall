import { IBookCard } from '@/type/BookDatatype';
import React from 'react';
import BookCard from '../../component/services/BookCard';
// import data from '@/../public/booksData.json';

const loadData = async () => {
    const res = await fetch('http://localhost:3000/booksData.json');
    const data = await res.json();
    return data;
}

const BooksData = async () => {

    const data: IBookCard[] = await loadData();
    return (
        <div className="max-w-[80%] mx-auto mt-30">
            <div className="items-center text-center mb-10">
                <h1 className="text-6xl font-semibold">Book</h1>
            </div>
            <div className="grid grid-cols-3 gap-5">
                {data.map(v => <BookCard key={v.bookId} eachbook={v}></BookCard>)}
            </div>
        </div>
    );
};

export default BooksData;