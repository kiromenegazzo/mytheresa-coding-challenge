import PropTypes from 'prop-types';
import React, { Suspense } from 'react';

import { Carousel } from 'components/Carousel';
import { Spinner } from 'components/Spinner';

import { genreEnum } from 'constants/movie';

import { useListQuery } from 'hooks/useQuery';
import { mapMovieToCarouselItem } from 'utils/mapFn';

const propTypes = {
  genre: PropTypes.oneOf(Object.keys(genreEnum)),
};

const DataCarousel = (props) => {
  const { genre } = props;
  const { data = [] } = useListQuery({ withGenres: genreEnum[genre] });

  return (
    <Carousel items={data.map(mapMovieToCarouselItem)} />
  );
};

DataCarousel.propTypes = propTypes;

export const Section = (props) => (
  <Suspense fallback={<Spinner />}>
    <DataCarousel {...props} />
  </Suspense>
);

Section.propTypes = propTypes;
