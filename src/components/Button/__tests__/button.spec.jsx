import * as React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import { Button } from '../Button';

const defaultChildren = 'children';

const setup = (props) => render(<Button {...props}>{props?.children || defaultChildren}</Button>);

describe('Component: Button', () => {
  describe('Prop: children', () => {
    it('should render passed children', () => {
      setup();

      expect(screen.getByText(defaultChildren)).toBeInTheDocument();
    });
  });

  describe('Prop: onClick', () => {
    it('should have primary styles', () => {
      const mockedOnClick = jest.fn();

      setup({ onClick: mockedOnClick });

      fireEvent.click(screen.getByText(defaultChildren));

      expect(mockedOnClick).toBeCalled();
    });
  });
});
