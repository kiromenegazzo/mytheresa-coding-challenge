import * as React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';

import { Image } from '../Image';

beforeEach(() => {
  mockAllIsIntersecting(true);
});

jest.mock('react-intersection-observer', () => ({
  useInView: () => ({ ref: null, inView: true }),
}));

const defaultProps = {
  alt: 'altText',
  src: 'imageSource',
};

const setup = (props) => render(<Image {...props} />);

describe('Component: Image', () => {
  describe('Prop: src', () => {
    describe('when no src passed', () => {
      it('should render default message', () => {
        setup();

        expect(screen.getByText('The image will be here very soon')).toBeInTheDocument();
      });

      it('should render passed alt text', () => {
        const { alt } = defaultProps;

        setup({ alt });

        expect(screen.getByText(alt)).toBeInTheDocument();
      });
    });

    it('should render passed image', () => {
      const { alt } = defaultProps;

      setup(defaultProps);

      expect(screen.getByAltText(alt)).toBeInTheDocument();
    });

    it('should render spinner when image loading', () => {
      setup(defaultProps);

      expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });

    it('shouldn\'t render spinner when image loaded', () => {
      setup(defaultProps);

      fireEvent.load(screen.getByAltText(defaultProps.alt));

      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
    });

    it('should render passed alt text when image not loaded', () => {
      const { alt } = defaultProps;

      setup(defaultProps);

      fireEvent.error(screen.getByAltText(alt));

      expect(screen.getByText(alt)).toBeInTheDocument();
    });
  });

  describe('Prop: onLoad', () => {
    it('should call passed callback when image loaded', () => {
      const mockedOnLoad = jest.fn();

      setup({ ...defaultProps, onLoad: mockedOnLoad() });

      fireEvent.load(screen.getByAltText(defaultProps.alt));

      expect(mockedOnLoad).toBeCalled();
    });
  });

  describe('Prop: onError', () => {
    it('should call passed callback when image not loaded', () => {
      const mockedOnError = jest.fn();

      setup({ ...defaultProps, onError: mockedOnError });

      fireEvent.error(screen.getByAltText(defaultProps.alt));

      expect(mockedOnError).toBeCalled();
    });
  });
});
