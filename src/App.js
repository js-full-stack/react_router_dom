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
          <NavLink to="/" className="NavLink" activeClassName="NavLink__active">
            Homepage
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/authors"
            className="NavLink"
            activeClassName="NavLink__active"
          >
            Authors
          </NavLink>
        </li>
        <li>
          <NavLink to="/books" style="NavLink" activeStyle="NavLink__active">
            Books
          </NavLink>
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
