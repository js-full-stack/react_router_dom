import { Component } from 'react';
import Axios from 'axios';
import { NavLink, Route } from 'react-router-dom';

import AuthorBooks from '../../Components/AuthorBooks';

class AuthorsView extends Component {
  state = {
    authors: [],
  };

  async componentDidMount() {
    //*Сразу же забираем с сервера не только авторов, но и книги, чтобы после передать их пропсом в AuthorBooks
    const repsonse = await Axios.get(
      'http://localhost:4040/authors?_embed=books',
    );
    this.setState({
      authors: repsonse.data,
    });
  }
  render() {
    const { authors } = this.state;
    const { url, path } = this.props.match;
    return (
      <>
        <h1>Books</h1>
        <ul>
          {authors.map(({ name, id }) => (
            <li key={id}>
              <NavLink to={`${url}/${id}`}>{name}</NavLink>
            </li>
          ))}
        </ul>

        {this.state.authors.length > 0 && (
          <Route
            path={`${path}/:authorId`}
            render={props => {
              // *здесь не нужно this, т.к. мы выполняем код непосредственно в Route и обращаемся к дефолтным пропам этого же компонента

              const bookId = Number(props.match.params.authorId);

              // *здесь также используем find, но получаем данные не из пропсов, а из стейта

              const author = this.state.authors.find(({ id }) => id === bookId);

              if (author) {
                console.log(author.books);
              }
              console.log(author);

              return <AuthorBooks {...props} authors={authors} />;
            }}
          />
        )}
      </>
    );
  }
}

export default AuthorsView;
