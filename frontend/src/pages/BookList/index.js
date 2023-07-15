import { React, useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useBookList } from '../../hooks/useBookList';
import Book from './components/Book';

import './styles.css';


function BookList() {

  let { list } = useParams();
  const { booksData, isLoading, error } = useBookList(list)

  return (
    <div className="BookList">
      {
        isLoading ? <p>Loading...</p> :
        error? error.message :
        booksData ? booksData.map(book => {
            console.log(book)
            return (
                <Book data={book.book_details[0]} amazon_url={book.amazon_product_url} rank={book.rank}></Book>
            )
        }) : ''
      }
    </div>
  )
}

export default BookList