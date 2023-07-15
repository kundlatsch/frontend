import { React, useEffect, useState} from 'react';
import BooksClient from '../../services/BooksAPI';
import { useBookList } from '../../hooks/useBookList';

import './styles.css';


function BookList() {

  const { booksData, isLoading, error } = useBookList("combined-print-and-e-book-nonfiction")

  return (
    <div>
      <h1>BookList:</h1>
      {
        isLoading ? <p>Loading...</p> :
        error? error.message :
        booksData ? booksData.map(book => {
            return (
                <div>{book.book_details[0].title}</div>
            )
        }) : ''
      }
    </div>
  )
}

export default BookList