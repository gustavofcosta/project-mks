import Minus from "@/assets/Minus";
import Plus from "@/assets/Plus";
import Image from "next/image";
import { ICardProducts } from "typings";
import { ContentImg, ContentInfo, ListItems, Amount } from "./styled";

export default function CartItems({id, photo, amount, price, brand, name}: ICardProducts) {
    return(
        <ListItems>
            <ContentImg>
                <Image
                    src={photo}
                    alt={name}
                    width={400}
                    height={250}
                />
            </ContentImg>
            <ContentInfo>
                <p>{brand} {name}</p>
                <div>
                    <Amount><button><Minus/></button><span>{ amount }</span><button><Plus/></button></Amount>
                    {price}
                </div>
            </ContentInfo>
        </ListItems>
    )
}