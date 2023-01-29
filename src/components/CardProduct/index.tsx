import ICardProducts from '../../Interface/ICardProducts';
import { Button, Card, ContentImg, ContentInfo, Price } from './styled';
import BagCard from '../../assets/BagCard'
import Image from 'next/image';

export default function CardProduct({
  photo,
  name,
  brand,
  description,
  price,
}: ICardProducts) {
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
          <Price>R${price}</Price>
        </div>
        <p>{description}</p>
      </ContentInfo>
      <Button><BagCard /> <span>Comprar</span></Button>
    </Card>

  );
}
