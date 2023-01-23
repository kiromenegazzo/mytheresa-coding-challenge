import React from 'react';

import { Section } from 'pages/Main/components';

import { genreEnum } from 'constants/movie';

export const Main = () => (
  <>
    <h1 className="heading">Choose something to watch</h1>
    {Object.keys(genreEnum).map((item) => (<Section genre={item} key={item} />))}
  </>
);
