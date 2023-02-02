import { Button, Card, ContentImg, ContentInfo, Price } from './styled';
import BagCard from '../../../assets/BagCard'
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { ICardProducts } from '../../../../typings';
import { AppDispatch } from '../../../store';
import { addCart } from '../../../features/cart/cartSlice';
import { openCartModal } from '@/features/cartModal/cartModalSlice';


export default function CardProduct({
  id,
  photo,
  name,
  brand,
  description,
  price,
}: ICardProducts) {
  const dispatch = useDispatch<AppDispatch>()

const handleBuy = (id: number) => {
  dispatch(addCart(id)); 
  dispatch(openCartModal());
}

  return (
    <Card>
      <ContentImg>
        <Image
          src={photo}
          alt={name}
          width={400}
          height={250}
        />
      </ContentImg>
      <ContentInfo>
        <div>
          <h1><span>{brand} </span>{name}</h1>
          <Price>R${parseFloat(price)}</Price>
        </div>
        <p>{description}</p>
      </ContentInfo>
      <Button onClick={() => handleBuy(id)} name="comprar" ><BagCard /> <span>Comprar</span></Button>
    </Card>

  );
}
