import PropTypes from 'prop-types';
import React from 'react';

import { StaticRouter } from 'react-router-dom/server';

import { Markup } from 'components/Markup';
import { Wrapper } from 'components/Wrapper';

import { App } from './App';

export const Server = ({ assetMap, location }) => (
  <Markup assetMap={assetMap}>
    <Wrapper>
      <StaticRouter location={location}>
        <App />
      </StaticRouter>
    </Wrapper>
  </Markup>
);

Server.propTypes = {
  assetMap: PropTypes.shape({}),
  location: PropTypes.string,
};
