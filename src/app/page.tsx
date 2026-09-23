import Banner from '@/component/services/Banner';
import BooksData from '@/app/listbook/BooksData';
import React from 'react';

const page = () => {
  return (
    <div>
      <Banner></Banner>
      <BooksData></BooksData>
    </div>
  );
};

export default page;