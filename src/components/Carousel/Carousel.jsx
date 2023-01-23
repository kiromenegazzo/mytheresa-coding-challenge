import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import { Image } from 'components/Image';
import { NoData } from 'components/NoData';

import { getDetailPageLink } from 'utils/getDetailPageLink';
import { getImageSource } from 'utils/getImageSource';

export const Carousel = (props) => {
  const { items, getItemLink = getDetailPageLink } = props;

  return (
    <div className="carousel">
      {items?.length > 0 ? (
        <div className="carousel__inner">
          {items.map((item) => {
            const { id, title, imageSrc } = item;

            return (
              <Link
                className="carousel__item"
                key={id}
                to={getItemLink(item)}
              >
                <h2 className="carousel__title">{title}</h2>
                <Image alt={title} aspectRatio="2/3" src={getImageSource(imageSrc, 300)} />
              </Link>
            );
          })}
        </div>
      ) : <NoData />}
    </div>
  );
};

Carousel.propTypes = {
  getItemLink: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    imageSrc: PropTypes.string,
    title: PropTypes.string,
  })),
};
