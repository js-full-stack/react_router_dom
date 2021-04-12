import Axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
          <Link to={`books./${id}`}>{title}</Link>
        ))}
      </ul>
    </>
  );
};

export default BooksView;
