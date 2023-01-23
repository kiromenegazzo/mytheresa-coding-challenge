import * as React from 'react';

import { render, screen } from '@testing-library/react';

import { Spinner } from '../Spinner';

describe('Component: Spinner', () => {
  it('should render', () => {
    render(<Spinner />);

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
});
