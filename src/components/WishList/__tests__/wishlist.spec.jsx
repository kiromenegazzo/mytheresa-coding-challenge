import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import { Provider } from 'jotai';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';

import { wishListAtom } from 'store/atoms';

import { WishList } from '../WishList';

beforeEach(() => {
  mockAllIsIntersecting(true);
});

const noDataMessage = 'No data';

jest.mock('components/NoData', () => ({
  NoData: () => noDataMessage,
}));

const setup = (atomValue) => render(
  <BrowserRouter>
    <Provider initialValues={[[wishListAtom, atomValue || []]]}>
      <WishList />
    </Provider>
  </BrowserRouter>,
);

describe('Component: Wishlist', () => {
  it('should render title', () => {
    setup();

    expect(screen.getByText('Wishlist')).toBeInTheDocument();
  });

  describe('when items are', () => {
    it('exist should render items', () => {
      const data = { id: 1, title: 'Movie' };

      setup([data]);

      expect(screen.getByText(data.title)).toBeInTheDocument();
    });

    it('empty should render empty message', () => {
      setup();

      expect(screen.getByText(noDataMessage)).toBeInTheDocument();
    });
  });
});
