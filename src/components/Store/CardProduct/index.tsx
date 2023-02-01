import { Button, Card, ContentImg, ContentInfo, Price } from './styled';
import BagCard from '../../../assets/BagCard'
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';

import { useRef } from 'react';
import { ICardProducts } from '../../../../typings';
import { AppDispatch } from '../../../store';
import { addCart } from '../../../features/cart/cartSlice';


export default function CardProduct({
  id,
  photo,
  name,
  brand,
  description,
  price,
}: ICardProducts) {
  const dispatch = useDispatch<AppDispatch>()



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
      <Button onClick={() => { dispatch(addCart(id)) }} name="comprar" ><BagCard /> <span>Comprar</span></Button>
    </Card>

  );
}
