
'use client'
import { IBookCard } from '@/type/BookDatatype';
import  { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import { Bounce, toast } from 'react-toastify';

const BookDitelseReadBtn = ({ eachData }: { eachData: IBookCard }) => {
    const { readlist, setReadlist } = useContext(BookContext)
    function handeler() {
        const finded = readlist.find(v => v.bookId == eachData.bookId);
        if (finded) {
            toast.warn(`${eachData.bookName} is Already Added`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
        else {
            setReadlist([...readlist, eachData]);
            toast.success(`${eachData.bookName} is Added`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }

    }
    return (
        <div>
            <button className="bg-white border-2 w-20 h-10 rounded-[5px] text-black hover:scale-105 transition-transform duration-300 cursor-pointer" onClick={() => handeler()}>
                Read
            </button>
        </div>
    );
};

export default BookDitelseReadBtn;