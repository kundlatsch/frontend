import { useState, useEffect } from "react";
import BooksClient from "../services/BooksAPI";

export const useBookList = (list) => {
  const [booksData, setBooksData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const { data } = await BooksClient.get(`/lists.json`, { 
        params: {
          list: list 
        }
      });
      setBooksData(data.results);
    } catch (error) {
      setError(error);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { booksData, isLoading, error };
};
