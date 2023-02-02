import React from 'react';
import { render } from '@testing-library/react';
import CartProduct from '.';

const mock = {
  id: 1,
  name: "name",
  brand: "brand",
  description: "description",
  price: "150",
  photo: "photo",
  amount: 120,
}

describe('<CartProduct />', () => {
  it('should render CartProduct correctly', () => {
    render(<CartProduct {...mock} />);

  })
});


