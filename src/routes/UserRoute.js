import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

function UserRoute({ children, ...rest }) {
  return window.localStorage.getItem('userEmail') ? (
    <Route {...rest} render={() => children} />
  ) : (
    <h1>
      Anda Harus <a href="/">Login </a>terlebih dahulu sebelum mengakses Halaman
      ini.
    </h1>
  );
}

export default UserRoute;
