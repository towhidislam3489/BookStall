
'use client'
import { IBookCard } from '@/type/BookDatatype';
import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import { Bounce, toast } from 'react-toastify';

const BookDitelseWishlistBtn = ({ eachData }: { eachData: IBookCard }) => {
    const { wishlist, setwishlist } = useContext(BookContext);
    const handeler = () => {
        const finded = wishlist.find(v => v.bookId == eachData.bookId);
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
            setwishlist([...wishlist, eachData])

        }
    }
    return (
        <div>
            <button className="bg-blue-600  w-20 h-10 rounded-[5px] text-white hover:scale-105 transition-transform duration-300 cursor-pointer" onClick={() => handeler()}>
                Wishlist
            </button>
        </div>
    );
};

export default BookDitelseWishlistBtn;