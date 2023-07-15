import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Home from './pages/Home';
import BookList from './pages/BookList';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/list/:list' element={<BookList />}/>
        <Route path='*' element={<Home />}/>
      </Routes>
    </BrowserRouter>
  )
};

export default Routing;