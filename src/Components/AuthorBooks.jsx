import { Component } from 'react';
import { Link } from 'react-router-dom';

class AuthorBooks extends Component {
  render() {
    const { books } = this.props;
    return (
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default AuthorBooks;
