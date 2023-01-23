import * as React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'jotai';

import { wishListAtom } from 'store/atoms';

import { WishlistButton } from '../WishlistButton';

const defaultData = { id: 1, genres: [] };
const addText = 'Add to wishlist';
const removeText = 'Remove from wishlist';

const setup = (data, atomValue) => {
  const dataToPass = data !== undefined ? data : defaultData;

  return render(
    <Provider initialValues={[[wishListAtom, atomValue || []]]}>
      <WishlistButton data={dataToPass} />
    </Provider>,
  );
};

describe('Component: WishlistButton', () => {
  it('should render add text by default', () => {
    setup();

    expect(screen.getByText(addText)).toBeInTheDocument();
  });

  describe('when user clicks', () => {
    it('should render remove text when item added', () => {
      setup();

      fireEvent.click(screen.getByText(addText));

      expect(screen.getByText(removeText)).toBeInTheDocument();
    });

    it('should render add text when item removed', () => {
      setup(defaultData, [defaultData]);

      fireEvent.click(screen.getByText(removeText));

      expect(screen.getByText(addText)).toBeInTheDocument();
    });
  });

  describe('Prop: data', () => {
    it('shouldn\'t render button when no data passed', () => {
      setup(null);

      expect(screen.queryByText(addText)).not.toBeInTheDocument();
    });

    it('should render button when data passed', () => {
      setup();

      expect(screen.getByText(addText)).toBeInTheDocument();
    });
  });
});
