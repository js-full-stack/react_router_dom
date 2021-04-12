import { Component } from 'react';

class BookDetailsView extends Component {
  state = {};
  render() {
    return <h1>Страница одной книги {this.props.match.params.bookId}</h1>;
  }
}

export default BookDetailsView;
