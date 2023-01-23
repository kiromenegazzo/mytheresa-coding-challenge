import PropTypes from 'prop-types';
import React, { useState } from 'react';

import cn from 'classnames';
import { useInView } from 'react-intersection-observer';

import { Spinner } from 'components/Spinner';

import { useNativeLazyLoading } from 'hooks/useNativeLazyLoading';

const getPaddingByAspectRatio = (value) => {
  switch (value) {
    case '16/9':
      return 56.25;
    case '4/3':
      return 75;
    case '2/3':
      return 150;
    case '1/1':
    default:
      return 100;
  }
};

export const Image = (props) => {
  const { src, alt, aspectRatio = '1/1', className, onLoad, onError } = props;
  const paddingBottom = `${getPaddingByAspectRatio(aspectRatio)}%`;

  const [error, setError] = useState();
  const loading = src && error === undefined;

  const nativeLazySupport = useNativeLazyLoading();
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
    skip: nativeLazySupport,
  });

  const handleLoad = (event) => {
    setError(false);

    if (onLoad) {
      onLoad(event);
    }
  };

  const handleError = (event) => {
    setError(true);

    if (onError) {
      onError(event);
    }
  };

  if (!src || error) {
    return (
      <div
        className={cn('image', 'image--empty', className)}
        style={{ paddingBottom }}
      >
        <p className="image__placeholder">
          {alt || 'The image will be here very soon'}
        </p>
      </div>
    );
  }

  return (
    <div
      className={cn('image', className)}
      ref={ref}
      style={{ paddingBottom }}
    >
      {(inView || nativeLazySupport) && (
        <>
          <img
            alt={alt}
            className="image__item"
            loading="lazy"
            src={src}
            style={{ aspectRatio }}
            onError={handleError}
            onLoad={handleLoad}
          />
          {loading && <Spinner />}
        </>
      )}
    </div>
  );
};

Image.propTypes = {
  alt: PropTypes.string,
  aspectRatio: PropTypes.string,
  className: PropTypes.string,
  src: PropTypes.string,
  onError: PropTypes.func,
  onLoad: PropTypes.func,
};
