import { Component } from 'react';
import Axios from 'axios';
import { Link, Route } from 'react-router-dom';

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
        <ul>
          {books.map(({ title, id }) => (
            <li key={id}>
              <Link to={`${this.props.match.url}/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default BooksView;
