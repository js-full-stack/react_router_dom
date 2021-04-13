import { Component } from 'react';
import Axios from 'axios';
import { NavLink, Route } from 'react-router-dom';

import AuthorBooks from '../../Components/AuthorBooks';

class AuthorsView extends Component {
  state = {
    authors: [],
  };

  async componentDidMount() {
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

        <Route
          path={`${path}/:authorId`}
          render={props => {
            const bookId = Number(props.match.params.authorId);
            const author = this.state.authors.find(({ id }) => id === bookId);

            return author && <AuthorBooks {...props} books={author.books} />;
          }}
        />
      </>
    );
  }
}

export default AuthorsView;
