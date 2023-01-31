import Image from "next/image";
import { ICardProducts } from "typings";
import { ListItems, Price, WrapperBtn, Amount } from "./styled";

export default function Product({ id, photo, amount, price, brand, name }: ICardProducts) {
    return (
        <ListItems>
            <button>X</button>
            <Image
                src={photo}
                alt={name}
                width={90}
                height={80}
            />
            <p>{brand} {name}</p>
            <Amount>
                <WrapperBtn>
                    <span> - </span>
                    <p>{amount}</p>
                    <span> + </span>
                </WrapperBtn>
                <div>
                    <Price>R${price}</Price>
                </div>

            </Amount>
        </ListItems>
    )
}