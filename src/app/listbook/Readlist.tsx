'use client'

import { BookContext } from "@/component/context/BookContext";
import { useContext } from "react";
import ReadCard from "@/component/services/ReadCard";

const Readlist = () => {
    const { readlist} = useContext(BookContext);
    return (

        <div>
            {readlist.map(v => <ReadCard key={v.bookId} eachbook={v}></ReadCard>)}
        </div>
    );
};

export default Readlist;