import axios from 'axios';

// NYT Books API
const BooksClient = axios.create({
  baseURL: 'https://api.nytimes.com/svc/books/v3',
});

BooksClient.interceptors.request.use((config) => {
    config.params = config.params || {};
    config.params['api-key'] = process.env.REACT_APP_NYT_BOOKS_API_KEY;
    return config;
});

export default BooksClient