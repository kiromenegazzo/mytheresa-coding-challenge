import * as React from 'react';

import { render, screen } from '@testing-library/react';

import { NoData } from '../NoData';

describe('Component: NoData', () => {
  describe('Prop: message', () => {
    it('should render default message', () => {
      render(<NoData />);

      expect(screen.getByText('Data not found')).toBeInTheDocument();
    });

    it('should render passed message', () => {
      const message = 'No data';

      render(<NoData message={message} />);

      expect(screen.getByText(message)).toBeInTheDocument();
    });
  });

  describe('Prop: children', () => {
    it('should render passed children', () => {
      const children = 'children';

      render(<NoData>{children}</NoData>);

      expect(screen.getByText(children)).toBeInTheDocument();
    });
  });
});
