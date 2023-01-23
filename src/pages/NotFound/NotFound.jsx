import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => (
  <div className="not-found">
    <p>Page not found</p>
    <Link className="not-found__link" to="/">Back to main page</Link>
  </div>
);
