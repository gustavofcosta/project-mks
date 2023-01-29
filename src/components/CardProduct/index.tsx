import ICardProducts from '../../Interface/ICardProducts';
import { Button, Card, ContentImg, ContentInfo } from './styled';
import BagCard from '../../assets/BagCard'

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
        <img
          src={photo}
          alt={name}
        />
      </ContentImg>
      <ContentInfo>
        <div>
          <h1><span>{brand} </span>{name}</h1>
          <p>R${price}</p>
        </div>
        <p>{description}</p>
      </ContentInfo>
      <Button><BagCard /> <span>Comprar</span></Button>
    </Card>

  );
}
