import PropTypes from 'prop-types';
import React from 'react';

import { useAtom } from 'jotai';

import { Button } from 'components/Button';

import { wishListAtom } from 'store/atoms';
import { getVariantByGenre } from 'utils/getByGenre';

const isEntityInList = (entity, list) => list.map((item) => item.id).includes(entity.id);

export const WishlistButton = (props) => {
  const { data } = props;
  const [wishList, setWishList] = useAtom(wishListAtom);

  const handleToggle = () => setWishList((prev) => (isEntityInList(data, prev)
    ? prev.filter((item) => item.id !== data.id)
    : prev.concat(data)));

  if (!data) return null;

  return (
    <Button variant={getVariantByGenre(data.genres)} onClick={handleToggle}>
      {`${isEntityInList(data, wishList) ? 'Remove from' : 'Add to'} wishlist`}
    </Button>
  );
};

WishlistButton.propTypes = {
  data: PropTypes.shape({
    genres: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })),
    id: PropTypes.number,
  }),
};
