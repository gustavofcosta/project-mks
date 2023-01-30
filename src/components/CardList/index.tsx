import { Wrapper } from './styled';
import ICardProducts from '../../Interface/ICardProducts';
import CardProduct from '../CardProduct';
import { useSelector } from 'react-redux';

export default function CardList() {
  const { listProducts } = useSelector((store: any) => store.cart)

  return (
    <Wrapper>
      {listProducts.map((product: ICardProducts) => {
        return <CardProduct key={product.id} {...product} />;
      })}
    </Wrapper>
  )
}



