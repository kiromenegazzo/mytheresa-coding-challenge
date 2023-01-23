import PropTypes from 'prop-types';
import React from 'react';

export const Markup = (props) => {
  const { children, assetMap } = props;

  return (
    <html lang="en">
      <head>
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
        <link href={assetMap['app.css']} rel="stylesheet" />
        {assetMap.fontLink && <link href={assetMap.fontLink} rel="stylesheet" />}
        <link href="/favicon.ico" rel="icon" />
        <title>Mytheresa</title>
      </head>
      <body>
        <noscript>Javascript is required for an application work</noscript>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  );
};

Markup.propTypes = {
  assetMap: PropTypes.shape({
    'app.css': PropTypes.string,
    'fontLink': PropTypes.string,
  }),
  children: PropTypes.node,
};
