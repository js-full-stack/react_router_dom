import { Component } from 'react';
import axios from 'axios';

class BookDetailsView extends Component {
  // *Храним в стейте не целый объект book, а отдельные свойства

  state = {
    descr: null,
    genre: null,
    id: null,
    imgUrl: null,
    title: null,
  };

  async componentDidMount() {
    // *Вытягиваем динамический параметр (id)
    const { bookId } = this.props.match.params;

    // *Создаем запрос на сервер
    const response = await axios.get(`http://localhost:4040/books/${bookId}`);

    // *Распыляем полученные данные в стейт
    this.setState({ ...response.data });
  }

  render() {
    //   * Деструктуризируем стейт
    const { title, descr, genre, imgUrl } = this.state;

    return (
      // * Рендерим результат
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
