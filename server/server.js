const React = require('react');

const { QueryClient, dehydrate, QueryClientProvider, Hydrate } = require('@tanstack/react-query');
const express = require('express');
const open = require('open');
const path = require('path');
const ReactDOMServer = require('react-dom/server');

const { genreEnum } = require('constants/movie');

const { getFontLinkByGenre } = require('utils/getByGenre');
const { getQueryListProps, getQueryItemProps } = require('utils/getQueryProps');

const { Server } = require('../src/Server');

const manifest = require('./dist/manifest');

const app = express();

const staticPath = path.join(__dirname, 'dist');

const genreList = Object.keys(genreEnum);

const render = async (req, res, fetchFn) => {
  const queryClient = new QueryClient();

  const assets = await fetchFn(queryClient);

  const dehydratedState = dehydrate(queryClient);

  const { pipe } = ReactDOMServer.renderToPipeableStream(
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>
        <Server assetMap={{ ...manifest, ...assets }} location={req.url} />
      </Hydrate>
    </QueryClientProvider>,
    {
      bootstrapScriptContent: `window.__REACT_QUERY_STATE__ = ${JSON.stringify(dehydratedState)};`,
      bootstrapScripts: Object
        .keys(manifest)
        .filter((key) => ['app.js', 'vendors.js', 'vendors-react.js'].includes(key))
        .map((key) => manifest[key]),
      onShellReady() {
        res.setHeader('content-type', 'text/html');
        pipe(res);
      },
    },
  );

  queryClient.clear();
};

app.use(express.static(staticPath));
app.get('/', async (req, res) => {
  const fetchFn = async (queryClient) => {
    await Promise.allSettled(genreList.map((key) => {
      const query = { withGenres: genreEnum[key] };

      return queryClient.prefetchQuery(getQueryListProps(query));
    }));

    return null;
  };

  await render(req, res, fetchFn);
});

app.get('/movie/:id', async (req, res) => {
  const fetchFn = async (queryClient) => {
    const query = getQueryItemProps(req.params.id);

    await queryClient.prefetchQuery(query);

    const data = queryClient.getQueryData(query);

    return {
      fontLink: getFontLinkByGenre(data?.genres),
    };
  };

  await render(req, res, fetchFn);
});

app.listen(3000);
open('http://localhost:3000');
