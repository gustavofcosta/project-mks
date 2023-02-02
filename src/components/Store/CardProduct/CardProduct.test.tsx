import React from 'react';
import { render } from '@testing-library/react';
import CardProduct from '.';

const mock = {
  id: 1,
  name: "name",
  brand: "brand",
  description: "descrition",
  price: "300",
  photo: "photo",
  amount: 150,
}

describe('<CardProduct />', () => {
  it('should render CardProduct correctly', () => {
    render(<CardProduct {...mock} />);

  })
});


