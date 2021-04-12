import Axios from 'axios';
import { useState, useEffect } from 'react';

const BooksView = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:4040/books').then(({ data }) => {
      setBooks(data);
    });
  }, []);

  return (
    <>
      <h1>Books</h1>
      <ul>
        {books.map(({ title, id }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </>
  );
};

export default BooksView;
