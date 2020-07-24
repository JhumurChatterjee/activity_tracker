import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import App from '../App';

test('renders hello world', () => {
  const { getByText } = render(<MemoryRouter><App /></MemoryRouter>);
  const navbarBrand = getByText('ACTIVITY TRACKER');
  expect(navbarBrand).toBeTruthy();
});
