import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import Navbar from '../../../components/Navbar';

test('renders navbar', () => {
  const { getByText } = render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  const navbarBrand = getByText('ACTIVITY TRACKER');
  expect(navbarBrand).toBeTruthy();
});
