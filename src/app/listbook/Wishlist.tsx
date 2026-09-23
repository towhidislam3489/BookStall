'use client'

import { BookContext } from "@/component/context/BookContext";
import { useContext } from "react";
import ReadCard from "@/component/services/ReadCard";
import WishCard from "@/component/services/WishCard";
const Wishlist = () => {
       const { wishlist} = useContext(BookContext);
    return (

        <div>
            {wishlist.map(v => <WishCard key={v.bookId} eachbook={v}></WishCard >)}
        </div>
    );
};


export default Wishlist;