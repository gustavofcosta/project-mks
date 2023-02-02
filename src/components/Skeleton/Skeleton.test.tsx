import React from 'react';
import { render } from '@testing-library/react';
import Skeleton from '.';

const mock = {
  width: 10,
  height: 20,
  borderRadius: 5,
  marginTop: 20,
}

describe('<Skeleton />', () => {
  it('should render Skeleton correctly', () => {
    render(<Skeleton {...mock} />);
  })
});


