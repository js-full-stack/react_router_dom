import { Route, Link, Switch } from 'react-router-dom';
import HomeView from './Views/HomeView';
import AuthorsView from './Views/AuthorsView';
import BooksView from './Views/BooksView';
import NotFoundViews from './Views/NotFoundView';

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

      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/authors" component={AuthorsView} />
        <Route path="/books" component={BooksView} />
        <Route component={NotFoundViews} />
      </Switch>
    </nav>
  );
}

export default App;
