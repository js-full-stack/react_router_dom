import { Route, Link } from 'react-router-dom';
import HomeView from './Views/HomeView';
import AuthorsView from './Views/AuthorsView';
import BooksView from './Views/BooksView';
function App() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Homepage</Link>
        </li>
        <li>
          <Link to="/authors">Authors</Link>
        </li>
        <li>
          <Link to="/books">Books</Link>
        </li>
      </ul>

      <Route exact path="/" component={HomeView} />
      <Route path="/authors" component={AuthorsView} />
      <Route path="/books" component={BooksView} />
    </nav>
  );
}

export default App;
