import { decrease, increase, removeItem } from '@/features/cart/cartSlice';
import Image from "next/image";
import { useDispatch } from 'react-redux';
import { ICardProducts } from "typings";
import { ListItems,Brand, Price, WrapperBtn, Amount } from "./styled";

export default function CartProduct({ id, photo, amount, price, brand, name }: ICardProducts) {
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
            <Brand>{brand} {name}</Brand>
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
             
                <Price>R${Math.trunc(price)}</Price>
                
            </Amount>
        </ListItems>
    )
}