import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';

import { Carousel } from '../Carousel';

const noDataMessage = 'No data';
const defaultItems = [{ id: 1, title: 'Movie name', imageSrc: 'Movie image' }];

beforeEach(() => {
  mockAllIsIntersecting(true);
});

jest.mock('components/NoData', () => ({
  NoData: () => noDataMessage,
}));

const setup = (props) => render(
  <BrowserRouter>
    <Carousel items={defaultItems} {...props} />
  </BrowserRouter>,
);

describe('Component: Carousel', () => {
  describe('Prop: items', () => {
    it('should render items', () => {
      setup();

      expect(screen.getByText('Movie name')).toBeInTheDocument();
    });

    it('should render empty message when items are empty', () => {
      setup({ items: [] });

      expect(screen.getByText(noDataMessage)).toBeInTheDocument();
    });
  });

  describe('Prop: getItemLink', () => {
    it('should have default link', () => {
      setup();

      expect(screen.getByRole('link')).toHaveAttribute('href', '/movie/1');
    });

    it('should have passed link', () => {
      const getItemLink = (data) => `/game/${data.id}`;

      setup({ getItemLink });

      expect(screen.getByRole('link')).toHaveAttribute('href', getItemLink(defaultItems[0]));
    });
  });
});
