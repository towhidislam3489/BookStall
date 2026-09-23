import BookCard from '@/component/services/BookCard';
import { IBookCard } from '@/type/BookDatatype';
import React from 'react';
import BookDetialse from '../BookDetialse';

const page = async({params}:{params:Promise<{id:string}>}) => {
    const res=await fetch('http://localhost:3000/booksData.json')
    const data:IBookCard[]=await res.json();
    const {id}=await params;
    const finded=data.find(v => String(v.bookId)===String(id))
    return (
        <div>
            {finded ?<BookDetialse key={finded.bookId} eachbook={finded}></BookDetialse>:"Not Found"}
        </div> 
    );
};
export default page;