import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '.';

describe('<Navbar />', () => {
  it('should reder Navbar correctly', () => {
    render(<Navbar />);
  })
});


