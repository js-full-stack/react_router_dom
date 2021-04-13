import { Component } from 'react';

class AuthorBooks extends Component {
  render() {
    const { books } = this.props;
    return (
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    );
  }
}

export default AuthorBooks;
