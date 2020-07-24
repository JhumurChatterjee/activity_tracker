import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import HomePage from '../../../pages/HomePage';

test('renders homePage', () => {
  const { getByText } = render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );

  const welcomeText = getByText('Welcome to Activity Tracker..!!');
  expect(welcomeText).toBeTruthy();
});
