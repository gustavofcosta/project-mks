import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '.';

describe('<Navbar />', () => {
  it('should render Navbar correctly', () => {
    render(<Navbar />);
  })
});


