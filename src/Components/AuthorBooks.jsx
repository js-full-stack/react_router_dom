import { Component } from 'react';

class AuthorBooks extends Component {
  state = {};

  componentDidMount() {
    console.log(Number(this.props.match.params.authorId));
    console.log(this.props.authors);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(Number(this.props.match.params.authorId));
    console.log(this.props.authors);
  }

  render() {
    return <h1>Компонент книги автора</h1>;
  }
}

export default AuthorBooks;
