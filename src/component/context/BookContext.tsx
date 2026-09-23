'use client'

import { IBookCard } from '@/type/BookDatatype';
import React, { createContext, ReactNode, useState } from 'react';

interface IbookContext {
    readlist: IBookCard[];
    setReadlist: React.Dispatch<React.SetStateAction<IBookCard[]>>;
    wishlist: IBookCard[];
    setwishlist: React.Dispatch<React.SetStateAction<IBookCard[]>>;

}

export const BookContext = createContext<IbookContext >({
     readlist:[],
    setReadlist: ()=>{},
    wishlist: [],
    setwishlist: ()=>{},
});

const ContextProvider = ({ children }: { children: ReactNode }) => {

    const [readlist, setReadlist] = useState<IBookCard[]>([]);
    const [wishlist, setwishlist] = useState<IBookCard[]>([]);
    const sharedData = {
        readlist,
        setReadlist,
        wishlist,
        setwishlist,
    }
    return (
        <BookContext.Provider value={sharedData}>{children}</BookContext.Provider>
    );
};

export default ContextProvider;