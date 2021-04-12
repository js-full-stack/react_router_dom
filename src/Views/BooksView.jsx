import { Component } from 'react';
import Axios from 'axios';

class BooksView extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    Axios.get('');
  }

  render() {
    return <ul></ul>;
  }
}

export default BooksView;
