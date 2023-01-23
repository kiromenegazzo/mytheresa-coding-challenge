import PropTypes from 'prop-types';
import React from 'react';

import { toast, ToastContainer } from 'react-toastify';

import { ErrorBoundary } from 'components/ErrorBoundary';

export const Wrapper = (props) => {
  const { children } = props;

  return (
    <React.StrictMode>
      <ErrorBoundary>
        <ToastContainer
          closeButton
          closeOnClick={false}
          position={toast.POSITION.TOP_RIGHT}
          theme="dark"
        />
        {children}
      </ErrorBoundary>
    </React.StrictMode>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node,
};
