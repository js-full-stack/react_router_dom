import AuthorBooks from '../../Components/AuthorBooks';

import { Component } from 'react';
import Axios from 'axios';
import { NavLink, Route } from 'react-router-dom';

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
        <Route path={`${path}/:authorId`} component={AuthorBooks} />
      </>
    );
  }
}

export default AuthorsView;
