import { Component } from 'react';
import Axios from 'axios';

class AuthorsView extends Component {
  state = {
    authors: [],
  };

  async componentDidMount() {
    const repsonse = await Axios.get('http://localhost:4040/authors/');
    this.setState({
      authors: repsonse.data,
    });
  }

  render() {
    const { authors } = this.state;

    return (
      <>
        <h1>Books</h1>
        <ul>
          {authors.map(({ name, id }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default AuthorsView;
