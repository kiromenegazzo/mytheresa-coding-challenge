import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { QueryClient, Hydrate, QueryClientProvider } from '@tanstack/react-query';
import { createRoot, hydrateRoot } from 'react-dom/client';

import { Wrapper } from 'components/Wrapper';

import { envVars } from 'utils/envVars';

import { App } from './App';

import 'assets/styles/styles.scss';
import 'assets/styles/normalize.css';
import 'react-toastify/dist/ReactToastify.css';

const rootNode = document.getElementById('root');
const root = createRoot(rootNode);

// eslint-disable-next-line no-underscore-dangle
const dehydratedState = window.__REACT_QUERY_STATE__;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      refetchOnWindowFocus: false,
      useErrorBoundary: true,
    },
  },
});

const Element = (
  <Wrapper>
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Hydrate>
    </QueryClientProvider>
  </Wrapper>
);

if (envVars.NODE_ENV === 'production') {
  hydrateRoot(rootNode, Element);
} else {
  root.render(Element);
}
