import { Route, NavLink, Switch } from 'react-router-dom';
import HomeView from './Views/HomeView';
import BooksView from './Views/BooksView/BooksViewClasses';
import AuthorsView from './Views/AuthorsView/AuthorsViewHooks';
import NotFoundViews from './Views/NotFoundView';
import BookDetailsView from './Views/BookDetailsView';

import './base.scss';

function App() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            exact
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Homepage
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/authors"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Authors
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/books"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Books
          </NavLink>
        </li>
      </ul>

      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/authors" component={AuthorsView} />
        <Route path="/books/:bookId" component={BookDetailsView} />
        <Route exact path="/books" component={BooksView} />

        <Route component={NotFoundViews} />
      </Switch>
    </nav>
  );
}

export default App;
