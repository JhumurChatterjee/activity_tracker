import React from 'react';
import { MemoryRouter } from 'react-router';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';
import Navbar from '../components/Navbar';

Enzyme.configure({ adapter: new Adapter() });

test('renders Navbar component', () => {
  const wrapper = mount(
    <MemoryRouter>
      <App/>
    </MemoryRouter>
  );

  expect(wrapper.find(Navbar)).toHaveLength(1);
});
