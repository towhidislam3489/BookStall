import React from 'react';
import Readlist from './Readlist';
import Wishlist from './Wishlist';

const page = () => {
    return (
        <div  >
            <h1 className="bg-amber-200 max-w-[80%] mx-auto  items-center text-center h-14 grid justify-center rounded-2xl text-2xl">All Books</h1>
            {/* name of each tab group should be unique */}
            <div className="grid justify-center m-16">
                <select defaultValue="Sort" className="select select-neutral">
                    <option disabled={true}>Sort</option>
                    <option value={"reating"}>Reating</option>
                    <option value={"page"}>Number of Page</option>
                    <option value={"year"}>Publish Year</option>
                </select>
            </div>
            <div className="max-w-[80%] mx-auto">
                <div className="tabs tabs-lift">
                    <input type="radio" name="my_tabs_3" className="tab" aria-label="Read" />
                    <div className="tab-content bg-base-100 border-base-300 p-6"> <Readlist></Readlist></div>

                    <input type="radio" name="my_tabs_3" className="tab" aria-label="Wishlist" defaultChecked />
                    <div className="tab-content bg-base-100 border-base-300 p-6"> <Wishlist></Wishlist></div>


                </div>
            </div>
        </div>

    );
};

export default page;