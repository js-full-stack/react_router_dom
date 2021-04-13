import { Component } from 'react';

class AuthorBooks extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    console.log('componentDidMount');
    const id = Number(this.props.match.params.authorId);

    const books = this.props.authors.find(author => author.id === id);

    this.setState({ books });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    console.log(Number(this.props.match.params.authorId));
    console.log(this.props.authors);
  }

  render() {
    // const { books } = this.state.books;
    // console.log(books);
    return (
      <ul>
        {/* {books.map(book => (
          <li key={book.id}>{book.title}</li>
        ))} */}
        <li>qwe</li>
      </ul>
    );
  }
}

export default AuthorBooks;
