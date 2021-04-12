import { Component } from 'react';
import Axios from 'axios';

class BooksView extends Component {
  state = {
    books: [],
  };

  async componentDidMount() {
    const repsonse = await Axios.get('http://localhost:4040/books/');
    this.setState({
      books: repsonse.data,
    });
  }

  render() {
    const { books } = this.state;

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
  }
}

export default BooksView;
