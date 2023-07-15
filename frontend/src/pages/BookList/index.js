import { React, useEffect, useState} from 'react';
import BooksClient from '../../services/BooksAPI';

import './styles.css';


function BookList() {

  const [list, setList] = useState([]);

  const getBooks = async () => {
    const { data } = await BooksClient.get(`/lists.json`, { 
      params: {
        list: "combined-print-and-e-book-nonfiction" 
      } 
    })
    console.log(data)
    return data
  }

  useEffect(() => {
    getBooks().then(data => setList(data.results))
  }, []);

  return (
    <div>
      <h1>BookList</h1>
      {
        list.map(book => {
            return (
                <div>{book.book_details[0].title}</div>
            )
        })
      }
    </div>
  )
}

export default BookList