import { Component } from 'react';
import axios from 'axios';

class BookDetailsView extends Component {

  state = {
    descr: null,
    genre: null,
    id: null,
    imgUrl: null,
    title: null,
  };

  async componentDidMount() {
    const { bookId } = this.props.match.params;

    const response = await axios.get(`http://localhost:4040/books/${bookId}`);

    this.setState({ ...response.data });
  }

  render() {
    const { title, descr, genre, imgUrl } = this.state;

    return (
      <>
        <h1>Название книги: {title}</h1>
        <p>Жанр: {genre}</p>
        <p>Описание: {descr}</p>
        <img src={imgUrl} alt={title} />
      </>
    );
  }
}

export default BookDetailsView;
