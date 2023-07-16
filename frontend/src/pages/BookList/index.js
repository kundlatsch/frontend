import { React, useEffect, useState} from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { useBookList } from '../../hooks/useBookList';
import Book from './components/Book';
import ListSelection from '../../shared_components/ListSelection'

import './styles.css';


function BookList() {

  let { list } = useParams();

  const { booksData, isLoading, error } = useBookList(list)

  return (
    <div className="BookListPage">
      {/* Header */}
      <div className="ListOptions">
        <Link to='/' className='return-button'>
            <FiArrowLeft />
            Return
        </Link>
        <ListSelection></ListSelection>
      </div>

      {/* Body */}
      <div className="BookList">
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
    </div>
    
  )
}

export default BookList