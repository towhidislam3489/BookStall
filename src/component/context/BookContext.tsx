'use client'

import React, { createContext, ReactNode, useState } from 'react';


export const BookContext=createContext({});

const ContextProvider = ({children}:{children:ReactNode}) => {

    const [readlist,setReadlist]=useState([]);
    const [wishlist,setwishlist]=useState([]);
    const sharedData={
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