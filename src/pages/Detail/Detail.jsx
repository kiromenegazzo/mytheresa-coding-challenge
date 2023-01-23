import React from 'react';
import { Link, useParams } from 'react-router-dom';

import cn from 'classnames';

import { Image } from 'components/Image';
import { NoData } from 'components/NoData';
import { WishList } from 'components/WishList';
import { WishlistButton } from 'components/WishlistButton';

import { MainPage } from 'constants/paths';

import { useItemQuery } from 'hooks/useQuery';
import { fetchFontByGenre } from 'utils/fetchFontByGenre';
import { getVariantByGenre } from 'utils/getByGenre';
import { getImageSource } from 'utils/getImageSource';

const BackButton = () => (
  <Link className="detail__back" to={MainPage.path}>
    ← Back to list
  </Link>
);

export const Detail = () => {
  const { id } = useParams();
  const { data } = useItemQuery(id, {
    onSuccess: (entity) => fetchFontByGenre(entity?.genres),
  });

  if (!data) {
    return (
      <div className="detail detail--empty">
        <NoData>
          <BackButton />
        </NoData>
      </div>
    );
  }

  const { title, tagline, overview, releaseDate, backdropPath, homepage, genres = [], voteAverage, voteCount } = data;

  return (
    <div className={cn('detail', `detail--${getVariantByGenre(genres)}`)}>
      <BackButton />
      <h1 className="heading">
        {title}
      </h1>
      {tagline && (
        <p className="detail__subtitle">
          {tagline}
        </p>
      )}
      <div className="detail__content">
        <Image alt={title} aspectRatio="16/9" src={getImageSource(backdropPath, 780)} />
        <div>
          <p>{overview}</p>
          <WishlistButton data={data} />
        </div>
      </div>
      <div className="detail__extra">
        {releaseDate && (
          <p>
            Release date:
            {' '}
            {new Date(releaseDate).toDateString()}
          </p>
        )}
        {homepage && (
          <p>
            Homepage:
            {' '}
            <a className={cn('link', `link--${getVariantByGenre(genres)}`)} href={homepage} rel="noopener noreferrer" target="_blank">{homepage}</a>
          </p>
        )}
        {genres && genres?.length !== 0 && (
          <div>
            Genres:
            {' '}
            <ul className="detail__list">
              {genres.map((item) => <li key={item.id}>{item.name}</li>)}
            </ul>
          </div>
        )}
        <p>
          {voteAverage && `Average rate ${voteAverage}`}
          {voteCount && ` from ${voteCount} voters`}
        </p>
      </div>
      <WishList />
    </div>
  );
};
