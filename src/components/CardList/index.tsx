import { Wrapper } from './styled';
import ICardProducts from '../../Interface/ICardProducts';
import CardProduct from '../CardProduct';

export default function CardList() {
  const products: ICardProducts[] = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'iPhone X 128 GB',
      brand: 'Apple',
      description:
        'Redesigned from scratch and completely revised.',
      price: 399,
    },
    {
      id: 2,
      img: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'iPhone X 128 GB',
      brand: 'Apple',
      description:
        'Redesigned from scratch and completely revised.',
      price: 2010.1,
    },
    {
      id: 3,
      img: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'iPhone X 128 GB',
      brand: 'Apple',
      description:
        'Redesigned from scratch and completely revised.',
      price: 2010.1,
    },
    {
      id: 4,
      img: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'iPhone X 128 GB',
      brand: 'Apple',
      description:
        'Redesigned from scratch and completely revised.',
      price: 2010.1,
    },
    {
      id: 5,
      img: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'iPhone X 128 GB',
      brand: 'Apple',
      description:
        'Redesigned from scratch and completely revised.',
      price: 2010.1,
    },
    {
      id: 6,
      img: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'iPhone X 128 GB',
      brand: 'Apple',
      description:
        'Redesigned from scratch and completely revised.',
      price: 2010.1,
    },
    {
      id: 7,
      img: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'iPhone X 128 GB',
      brand: 'Apple',
      description:
        'Redesigned from scratch and completely revised.',
      price: 2010.1,
    },
    {
      id: 8,
      img: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'iPhone X 128 GB',
      brand: 'Apple',
      description:
        'Redesigned from scratch and completely revised.',
      price: 2010.1,
    },
  ];

  return (
    <Wrapper>
      {products.map((product) => {
        return <CardProduct key={product.id} {...product} />;
      })}
    </Wrapper>
  );
}
