import React from 'react';

import { useAtomValue } from 'jotai';

import { Carousel } from 'components/Carousel';

import { wishListAtom } from 'store/atoms';
import { mapMovieToCarouselItem } from 'utils/mapFn';

export const WishList = () => {
  const wishList = useAtomValue(wishListAtom);

  return (
    <>
      <h2 className="heading">Wishlist</h2>
      <Carousel items={wishList.map(mapMovieToCarouselItem)} />
    </>
  );
};
