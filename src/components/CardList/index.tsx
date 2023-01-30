import { Wrapper } from './styled';
import ICardProducts from '../../Interface/ICardProducts';
import CardProduct from '../CardProduct';
import { useState } from 'react';


export default function CardList({ products }: any) {

  const [listProducts, setListProducts] = useState<ICardProducts[]>(products)

  return (
    <Wrapper>
      {listProducts.map((product: ICardProducts) => {
        return <CardProduct key={product.id} {...product} />;
      })}
    </Wrapper>
  )
}



