import React from 'react';
import { render } from '@testing-library/react';
import Example from './index';

test('renders learn react link', () => {
  const { getByText } = render(<Example />);
  const linkElement = getByText(/learn reacttt/i);
  expect(linkElement).toBeInTheDocument();
});
