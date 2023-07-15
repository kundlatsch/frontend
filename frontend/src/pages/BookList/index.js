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
      <div className="ListOptions">
        
      </div>
      {
        isLoading ? <p>Loading...</p> :
        error? error.message :
        booksData ? booksData.map(book => {
            return (
                <Book data={book.book_details[0]} amazon_url={book.amazon_product_url} rank={book.rank}></Book>
            )
        }) : ''
      }
    </div>
  )
}

export default BookList