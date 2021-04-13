import { Component } from 'react';

class AuthorBooks extends Component {
  state = {
    books: [],
  };

  // componentDidMount() {
  //   // * Вытягиваем динамический параметр authorId, переданный через path Route
  //   // * в родительском компоненте и сразу преобразовываем к числу, т.к. id в БД хранится числом, а не строкой
  //   const id = Number(this.props.match.params.authorId);

  //   // *Деструктуризируем массив books из объекта author и ищем книги выбранного автора через find
  //   const { books } = this.props.authors.find(author => author.id === id);

  //   // *Теперь запишем книги в стейт
  //   this.setState({ books });
  // }

  //  *Пройдемся мэпом и отрендерим
  render() {
    // const { books } = this.state;
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
