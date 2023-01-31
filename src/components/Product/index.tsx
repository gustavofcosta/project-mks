import { decrease, increase, removeItem } from '@/features/cart/cartSlice';
import Image from "next/image";
import { useDispatch } from 'react-redux';
import { ICardProducts } from "typings";
import { ListItems, Price, WrapperBtn, Amount } from "./styled";

export default function Product({ id, photo, amount, price, brand, name }: ICardProducts) {
    const dispatch = useDispatch()

    return (
        <ListItems>
            <button onClick={() => dispatch(removeItem(id))}>X</button>
            <Image
                src={photo}
                alt={name}
                width={90}
                height={80}
            />
            <p>{brand} {name}</p>
            <Amount>
                <WrapperBtn>
                    <span onClick={() => {
                        if (amount === 1) {
                            dispatch(removeItem(id));
                            return;
                        }
                        dispatch(decrease({ id }));
                    }}> - </span>
                    <p>{amount}</p>
                    <span onClick={() => {
                        dispatch(increase({ id }));
                    }}> + </span>
                </WrapperBtn>
                <div>
                    <Price>R${Math.trunc(price)}</Price>
                </div>

            </Amount>
        </ListItems>
    )
}