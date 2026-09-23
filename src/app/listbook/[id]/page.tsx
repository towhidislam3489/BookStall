
import { IBookCard } from '@/type/BookDatatype';
import React from 'react';
import BookDetialse from '../BookDetialse';

const loadedData = async():Promise<IBookCard[]> => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`)
        const data: IBookCard[] = await res.json();
        return data;
    }
    catch (error) {
        console.log("Erron fetching Books data : ", error);
        return [];
        
    }
}
const page = async ({ params }: { params: Promise<{ id: string }> }) => {

    const { id } = await params;
    const data:IBookCard[]=await loadedData();
    const finded = data.find(v => String(v.bookId) === String(id))
    return (
        <div>
            {finded ? <BookDetialse key={finded.bookId} eachbook={finded}></BookDetialse> : "Not Found"}
        </div>
    );
};
export default page;