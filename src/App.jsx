import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ScrollToTop } from 'components/ScrollToTop';
import { Spinner } from 'components/Spinner';

import { Routes as AppRoutes } from 'constants/routes';

export const App = () => (
  <>
    <Suspense fallback={<Spinner />}>
      <Routes>
        {AppRoutes.map(({ key, path, Component }) => (
          <Route element={<Component />} key={key} path={path} />
        ))}
      </Routes>
    </Suspense>
    <ScrollToTop />
  </>
);
