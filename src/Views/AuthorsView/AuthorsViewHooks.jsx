import Axios from 'axios';
import { useState, useEffect } from 'react';

const AuthorsView = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:4040/authors').then(({ data }) => {
      setAuthors(data);
      console.log(data);
    });
  }, []);

  return (
    <>
      <h1>Authors</h1>
      <ul>
        {authors.map(({ name, id }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </>
  );
};

export default AuthorsView;
