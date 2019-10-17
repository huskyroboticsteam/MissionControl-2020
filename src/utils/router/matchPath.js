import { matchPath } from 'react-router-dom';

export default (currentPath, path) =>
  matchPath(currentPath, {
    exact: false,
    path,
    strict: false
  });
