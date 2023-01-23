import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    // eslint-disable-next-line no-console
    console.error(error, errorInfo);
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node,
};
