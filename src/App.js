import { Route, NavLink, Switch } from 'react-router-dom';
import HomeView from './Views/HomeView';
import AuthorsView from './Views/AuthorsView';
import BooksView from './Views/BooksView';
import NotFoundViews from './Views/NotFoundView';

function App() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Homepage</NavLink>
        </li>
        <li>
          <NavLink to="/authors">Authors</NavLink>
        </li>
        <li>
          <NavLink to="/books">Books</NavLink>
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
