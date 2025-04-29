import { Fragment } from 'react';
import {Link} from 'react-router-dom';

function NotFoundPage() {
  return (
    <Fragment>
      <h1>404 Error</h1>
      <h2>Page not found</h2>
      <Link to={'/'}>Return to the main page</Link>
    </Fragment>
  );
}

export default NotFoundPage;
