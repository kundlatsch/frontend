import { React, useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useBookList } from '../../hooks/useBookList';

import './styles.css';


function BookList() {

  let { list } = useParams();
  const { booksData, isLoading, error } = useBookList(list)

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